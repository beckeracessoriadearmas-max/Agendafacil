let servicos = JSON.parse(localStorage.getItem("diarias")) || [];

const calendario = document.getElementById("calendario");
const mesAno = document.getElementById("mesAno");
const lista = document.getElementById("lista");

const hoje = new Date();
const ano = hoje.getFullYear();
const mes = hoje.getMonth();

mesAno.innerText = hoje.toLocaleDateString("pt-BR",{month:"long",year:"numeric"});

const ultimoDia = new Date(ano,mes+1,0).getDate();

for(let dia=1;dia<=ultimoDia;dia++){

let dataStr=`${ano}-${String(mes+1).padStart(2,'0')}-${String(dia).padStart(2,'0')}`;

let div=document.createElement("div");
div.className="dia";
div.innerText=dia;

if(servicos.some(s=>s.data===dataStr)){
div.classList.add("tem-servico");
}

if(dia===hoje.getDate()){
div.classList.add("hoje");
}

div.onclick=()=>mostrar(dataStr);

calendario.appendChild(div);
}

function mostrar(data){

lista.innerHTML=`<h3>${data}</h3>`;

let doDia=servicos.filter(s=>s.data===data);

if(doDia.length===0){
lista.innerHTML+="<p>Nenhum serviço</p>";
return;
}

doDia.forEach(s=>{
lista.innerHTML+=`
<div>
⏰ ${s.horario}<br>
👤 ${s.cliente}<br>
💰 R$ ${s.valor}
</div><hr>
`;
});
}

function novoServico(){

let data=prompt("Data YYYY-MM-DD");
let horario=prompt("Horário");
let cliente=prompt("Cliente");
let valor=prompt("Valor");

servicos.push({data,horario,cliente,valor});

localStorage.setItem("diarias",JSON.stringify(servicos));

location.reload();
}

// resumo
document.getElementById("servicosMes").innerText="📅 Serviços: "+servicos.length;

let total=0;
servicos.forEach(s=>total+=Number(s.valor||0));
document.getElementById("total").innerText="💰 Total: R$ "+total;

let hojeStr=new Date().toISOString().slice(0,10);
let hojeQtd=servicos.filter(s=>s.data===hojeStr).length;
document.getElementById("hoje").innerText="⏰ Hoje: "+hojeQtd;
