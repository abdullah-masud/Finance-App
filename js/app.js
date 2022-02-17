/* Warning message function */
function warningMessage(itemID) {
    const warnMessage = document.getElementById(itemID);
    warnMessage.style.display = 'block'
    warnMessage.style.color = 'red'
}

/* Income Input function */
function incomeInput() {
    const incomeInputField = document.getElementById('income-input');
    const incomePrice = parseFloat(incomeInputField.value);
    if (incomePrice < 0 || isNaN(incomePrice)) {
        warningMessage('block')
    } else {
        return incomePrice;
    }
}

/* adding expenses */
function addExpenses() {
    const foodInputField = document.getElementById('food-input');
    const foodPrice = parseFloat(foodInputField.value);

    const rentInputField = document.getElementById('rent-input');
    const rentPrice = parseFloat(rentInputField.value);

    const clothesInputField = document.getElementById('clothes-input');
    const clothesPrice = parseFloat(clothesInputField.value);

    if (foodPrice < 0 || isNaN(foodPrice) || rentPrice < 0 || isNaN(rentPrice) || clothesPrice < 0) {
        warningMessage('block')

    } else {
        const total = foodPrice + rentPrice + clothesPrice;
        return total
    }
}

/* Handle Calculate button */
document.getElementById('calculate-button').addEventListener('click', function() {
    const incomePrice = incomeInput()
    const total = addExpenses()
    const balance = incomePrice - total

    const totalBalanceField = document.getElementById('total-balance')

    const totalExpenses = document.getElementById('total-expenses');

    const warnMessage = document.getElementById('block');

    if (incomePrice > total) {
        warnMessage.style.display = 'none'
        totalBalanceField.innerText = balance
        totalExpenses.innerText = total
    } else if (total > incomePrice) {
        warningMessage('block')
        warnMessage.innerText = "Your expenses should be less than your income to see the balance"
        totalExpenses.innerText = total
        totalBalanceField.innerText = ""
    } else if (total > 0) {
        totalExpenses.innerText = total
        warnMessage.innerText = "Enter Positive Income to see the balance"
        totalBalanceField.innerText = ""
    }
})

/* Handle Save Button */
document.getElementById('save-button').addEventListener('click', function() {
    const incomePrice = incomeInput()

    const savingInputField = document.getElementById('saving-input');
    const savingPercentage = parseFloat(savingInputField.value);

    const savingAmountField = document.getElementById('saving-amount');
    const savings = (savingPercentage / 100) * incomePrice;

    const remainingBalanceField = document.getElementById('remaining-balance');

    const totalBalanceField = document.getElementById('total-balance')
    const totalBalance = parseFloat(totalBalanceField.innerText);

    const warnMessage2 = document.getElementById('block2');
    if (savings > totalBalance) {
        warnMessage2.style.display = 'block'
        warnMessage2.style.color = 'red'
        savingAmountField.innerText = "";
        remainingBalanceField.innerText = "";

    } else if (savings < totalBalance) {
        savingAmountField.innerText = savings.toFixed(2)
        const remaining = totalBalance - savings
        remainingBalanceField.innerText = remaining.toFixed(2)
        warnMessage2.style.display = 'none'
    }
    if (isNaN(savingPercentage) || savingPercentage < 0) {
        warnMessage2.style.display = 'block'
        warnMessage2.style.color = 'red'
        warnMessage2.innerText = "Enter positive number only"
        savingAmountField.innerText = "";
        remainingBalanceField.innerText = "";
    }
})