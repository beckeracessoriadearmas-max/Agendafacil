function login() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if(user === "admin" && pass === "1234"){
        localStorage.setItem("usuarioLogado", user);
        window.location.href = "index.html";
    } else {
        alert("Usuário ou senha inválidos");
    }
}

function verificarLogin(){
    const usuario = localStorage.getItem("usuarioLogado");

    if(!usuario){
        window.location.href = "../login.html";
    }
}

function logout(){
    localStorage.removeItem("usuarioLogado");
    window.location.href = "../login.html";
}
