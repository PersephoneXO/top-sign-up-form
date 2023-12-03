const button=document.getElementById('create');
button.disabled=true;


document.getElementById('confirm-p').oninput=function(){
    var pswd=document.getElementById('password').value;
    var confirmPswd=document.getElementById('confirm-p').value;

    if(pswd!=confirmPswd){
        document.getElementById('password').style.borderColor='red';
        document.getElementById('confirm-p').style.borderColor='red';
        document.getElementById('pswd-message').innerHTML='* Passwords do not match';
        button.disabled=true;
        return false;
    }
    else{
        document.getElementById('pswd-message').innerHTML='';
        document.getElementById('password').style.borderColor='green';
        document.getElementById('confirm-p').style.borderColor='green';
        button.disabled=false;
        return true;
    }
}


button.addEventListener('click',(event)=>{
    event.preventDefault();
    document.getElementById('successful-creation').innerHTML='Account Created Successfully';
});
