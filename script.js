const data = new Date;

const diaAtual = data.getDay();
const mesAtual = data.getMonth();
const anoAtual = data.getFullYear();

const erro = document.querySelector(".error");
const but = document.querySelector(".botao");

const dia = document.getElementById("numday");
const mes = document.getElementById("nummonth");
const ano = document.getElementById("numyear");

but.addEventListener("click",()=> {
    if (dia > 31) {
        console.log(erro)
    }
})

