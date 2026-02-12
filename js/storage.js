function salvarDiaria(dados){
let lista=JSON.parse(localStorage.getItem("diarias"))||[];
lista.push(dados);
localStorage.setItem("diarias",JSON.stringify(lista));
}

function pegarDiarias(){
return JSON.parse(localStorage.getItem("diarias"))||[];
}