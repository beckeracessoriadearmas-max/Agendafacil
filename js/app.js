document.addEventListener("DOMContentLoaded", () => {

    // ===== REGISTRAR PWA =====
    if ("serviceWorker" in navigator) {

        navigator.serviceWorker.register("../sw.js")
        .catch(()=> navigator.serviceWorker.register("sw.js"));

    }

    // ===== PROTEÇÃO LOGIN =====
    const logado = localStorage.getItem("logado");

    if(logado !== "true" && !window.location.pathname.includes("login.html")){

        if(window.location.pathname.includes("/pages/")){
            window.location.href = "../login.html";
        }else{
            window.location.href = "login.html";
        }

    }

    // ===== BUSCAR DIARIAS =====
    const diarias = JSON.parse(localStorage.getItem("diarias")) || [];

    atualizarDashboard(diarias);
    marcarCalendario(diarias);

});


// ===== DASHBOARD =====
function atualizarDashboard(diarias){

    const totalMesEl = document.getElementById("totalMes");
    const totalDiariasEl = document.getElementById("totalDiarias");

    if(!totalMesEl || !totalDiariasEl) return;

    let total = 0;

    diarias.forEach(d=>{
        total += Number(d.valor || 0);
    });

    totalMesEl.innerText = "R$ " + total.toFixed(2);
    totalDiariasEl.innerText = diarias.length;

}


// ===== MARCAR CALENDARIO =====
function marcarCalendario(diarias){

    const dias = document.querySelectorAll(".dia");
    if(dias.length === 0) return;

    diarias.forEach(d=>{

        if(!d.data) return;

        const diaNumero = Number(d.data.split("-")[2]);

        dias.forEach(el=>{

            if(Number(el.innerText) === diaNumero){
                el.classList.add("tem-servico");
            }

        });

    });

}
// ===== ABRIR MODAL =====
function abrirModal(data){

    const modal = document.getElementById("modal");
    const lista = document.getElementById("listaServicos");
    const titulo = document.getElementById("tituloModal");

    const diarias = JSON.parse(localStorage.getItem("diarias")) || [];

    lista.innerHTML="";
    titulo.innerText="Serviços "+data;

    const doDia = diarias.filter(d=>d.data===data);

    if(doDia.length===0){
        lista.innerHTML="<p>Nenhum serviço</p>";
    }else{

        doDia.forEach(d=>{
            lista.innerHTML+=`
            <div class="card">
                ⏰ ${d.horario}<br>
                👤 ${d.cliente}<br>
                💰 R$ ${d.valor}
            </div>
            `;
        });

    }

    modal.style.display="flex";
}


// ===== FECHAR MODAL =====
function fecharModal(){
    document.getElementById("modal").style.display="none";
}