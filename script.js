const toggle=document.getElementById("toggle");

const password=document.getElementById("password");

toggle.onclick=function(){

if(password.type==="password"){

password.type="text";

toggle.classList.remove("fa-eye-slash");

toggle.classList.add("fa-eye");

}

else{

password.type="password";

toggle.classList.remove("fa-eye");

toggle.classList.add("fa-eye-slash");

}

};

document.getElementById("loginForm").addEventListener("submit",function(e){

e.preventDefault();

alert("Login Failed, Server Issue.");

});
