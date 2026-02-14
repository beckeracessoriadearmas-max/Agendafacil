function login(){

let user = document.getElementById("user").value;
let pass = document.getElementById("pass").value;

if(user === "admin" && pass === "123"){

// PADRÃO NOVO
localStorage.setItem("usuarioLogado", user);

window.location = "index.html";

}else{

alert("Login inválido");

}

}

function verificarLogin(){

const usuario = localStorage.getItem("usuarioLogado");

if(!usuario){
window.location = "../login.html";
}

}

function sair(){

localStorage.removeItem("usuarioLogado");
window.location = "../login.html";

}
