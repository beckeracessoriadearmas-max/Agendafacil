function carregarTopo(){

    const topo = document.querySelector(".topo");

    if(!topo) return;

    const usuario = "Admin";

    topo.innerHTML = `
        <div>📅 Agenda Fácil</div>
        <div>
            👤 ${usuario}
            <button onclick="sair()" class="botao">Sair</button>
        </div>
    `;

}

document.addEventListener("DOMContentLoaded", carregarTopo);