document.addEventListener("DOMContentLoaded", function(){

    const usuario = localStorage.getItem("usuarioLogado");

    if(usuario){

        const topo = document.createElement("div");
        topo.className = "topo";

        topo.innerHTML = `
            <div class="menu">
                <a href="../index.html">Início</a>
                <a href="nova-diaria.html">Nova Diária</a>
                <a href="financeiro.html">Financeiro</a>
                <a href="configuracoes.html">Configurações</a>
                <button onclick="logout()">Sair</button>
            </div>
        `;

        document.body.prepend(topo);
    }

});
