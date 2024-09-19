document.getElementById('add-money').addEventListener('click', function(e){
    e.preventDefault();

const addMoney = document.getElementById('amount').value ;
const addMoneyNumber = parseFloat(addMoney)
const pinNumber = document.getElementById('pinNum').value;

if(pinNumber === '1234'){
    const balance = document.getElementById('current-balance').innerText;
    const balanceNumber = parseFloat(balance);
    const newBalance = addMoneyNumber + balanceNumber ;
    document.getElementById('current-balance').innerText = newBalance ;
}
else{
    alert('Incorrect Your Information Please Type Correct Information')
}

})