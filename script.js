const data = new Date;

const diaAtual = data.getDay();
const mesAtual = data.getMonth() +1;
const anoAtual = data.getFullYear();

const dia = document.getElementById("numday");
const mes = document.getElementById("nummonth");
const ano = document.getElementById("numyear");

function calcular() {
    const diaResul = diaAtual - dia
    const mesResul = mesAtual - mes
    const anoResul = anoAtual - ano
    console.log(diaResul)
    console.log(mesResul)
    console.log(anoResul)
}

