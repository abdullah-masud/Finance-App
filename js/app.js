/* Warning message function */
function warningMessage() {
    const warnMessage = document.getElementById('block');
    warnMessage.style.display = 'block'
    warnMessage.style.color = 'red'
}

/* Income Input function */
function incomeInput() {
    const incomeInputField = document.getElementById('income-input');
    const incomePrice = parseFloat(incomeInputField.value);
    if (incomePrice < 0 || isNaN(incomePrice)) {
        warningMessage()
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
        warningMessage()
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

    if (total > 0) {
        totalExpenses.innerText = total
        warnMessage.innerText = "Enter Income to see the balance"
    } else if (total > incomePrice) {
        warnMessage.style.display = 'block'
        warnMessage.style.color = 'red'
        warnMessage.innerText = "Your expenses should be less than your income"
    }
    if (incomePrice > total) {
        warnMessage.style.display = 'none'
        totalBalanceField.innerText = balance
    }
})

/* Handle Save Button */
document.getElementById('save-button').addEventListener('click', function() {
    const incomePrice = incomeInput()

    const savingInputField = document.getElementById('saving-input');
    const savingValue = parseFloat(savingInputField.value);

    const savingAmountField = document.getElementById('saving-amount');
    const savings = (savingValue / 100) * incomePrice;

    const remainingBalanceField = document.getElementById('remaining-balance');

    const totalBalanceField = document.getElementById('total-balance')
    const totalBalance = parseFloat(totalBalanceField.innerText);

    const warnMessage = document.getElementById('block2');
    if (savings > totalBalance) {
        warnMessage.style.display = 'block'
        warnMessage.style.color = 'red'
        savingAmountField.innerText = "";
        remainingBalanceField.innerText = "";
    } else {
        savingAmountField.innerText = savings.toFixed(2)
        const remaining = totalBalance - savings
        remainingBalanceField.innerText = remaining.toFixed(2)
        warnMessage.style.display = 'none'
    }
    if (isNaN(savingValue) || savingValue < 0) {
        savingAmountField.innerText = "";
        remainingBalanceField.innerText = "";
    }
})