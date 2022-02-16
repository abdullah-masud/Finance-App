/* Handle Calculate button */
document.getElementById('calculate-button').addEventListener('click', function() {
    const incomeInputField = document.getElementById('income-input');
    const incomePrice = parseFloat(incomeInputField.value);

    const foodInputField = document.getElementById('food-input');
    const foodPrice = parseFloat(foodInputField.value);

    const rentInputField = document.getElementById('rent-input');
    const rentPrice = parseFloat(rentInputField.value);

    const clothesInputField = document.getElementById('clothes-input');
    const clothesPrice = parseFloat(clothesInputField.value);

    const total = foodPrice + rentPrice + clothesPrice;
    const balance = incomePrice - total

    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = total

    const totalBalanceField = document.getElementById('total-balance')
    totalBalanceField.innerText = balance
})

/* Handle Save Button */
document.getElementById('save-button').addEventListener('click', function() {
    const incomeInputField = document.getElementById('income-input');
    const incomePrice = parseFloat(incomeInputField.value);

    const savingInputField = document.getElementById('saving-input');
    const savingValue = parseFloat(savingInputField.value);

    const savingAmountField = document.getElementById('saving-amount');

    const savings = (savingValue / 100) * incomePrice;

    savingAmountField.innerText = savings

    const totalBalanceField = document.getElementById('total-balance')
    const totalBalance = parseFloat(totalBalanceField.innerText);
    const remainingBalanceField = document.getElementById('remaining-balance');
    const remaining = totalBalance - savings
    remainingBalanceField.innerText = remaining
})