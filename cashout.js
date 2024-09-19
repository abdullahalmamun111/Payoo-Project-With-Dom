document.getElementById('cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = document.getElementById('cashOutAmount').value ;
    const cashOutAmount = parseFloat(cashOut);

    const cashOutPin = document.getElementById('cashOutPinNum').value ;
    
    if(cashOutPin === '1234'){
        const cash = document.getElementById('current-balance').innerText;
        const cashBalance = parseFloat(cash);
        const updatebalance = cashBalance - cashOutAmount ;
        document.getElementById('current-balance').innerText = updatebalance ;
    }
    else{
        alert('Incorrect Your Information Please Type Correct Information')
    }
})