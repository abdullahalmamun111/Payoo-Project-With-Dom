
document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    const phnNumber = document.getElementById('number').value ;
    const pinNumber = document.getElementById('pin').value;
    
    if(phnNumber === '5' && pinNumber === '1234'){
        console.log('You are Logged in')
        window.location.href = 'home.html'
    }
    else{
        alert('Your Phone Number Or Pin Is Incorrect')
    }
})