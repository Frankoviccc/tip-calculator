 const submitBtn = document.getElementById('submitBtn')
 const totalPrice = document.getElementById('totalPrice')

function calculate() {
    const billAmount = Number(document.getElementById('amount').value)
    const tipAmount = Number(document.getElementById('tip').value)
    const sum = (((billAmount / 100) * tipAmount) + billAmount)
    totalPrice.textContent = `Total: $${sum}`
}

submitBtn.addEventListener('click', calculate)