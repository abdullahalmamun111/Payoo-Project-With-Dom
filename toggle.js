document.getElementById('showCashOut').addEventListener('click',function(){
    document.getElementById('cashOutForm').classList.remove('hidden');
    document.getElementById('addMoneyForm').classList.add('hidden');
})

document.getElementById('showAdd').addEventListener('click', function(){
    document.getElementById('addMoneyForm').classList.remove('hidden');
    document.getElementById('cashOutForm').classList.add('hidden');
})