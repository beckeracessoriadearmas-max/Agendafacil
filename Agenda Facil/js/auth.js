function login(){

let user = document.getElementById("user").value;
let pass = document.getElementById("pass").value;

if(user === "admin" && pass === "123"){

localStorage.setItem("logado","true");
window.location = "index.html";

}else{

alert("Login inválido");

}

}

function verificarLogin(){

if(localStorage.getItem("logado") !== "true"){

window.location = "../login.html";

}

}

function sair(){

localStorage.removeItem("logado");
window.location = "../login.html";

}