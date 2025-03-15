const data = new Date();

const diaAtual = data.getDate();
const mesAtual = data.getMonth()+1;
const anoAtual = data.getFullYear();

const erroDia = document.querySelector(".error1");
const erroMes = document.querySelector(".error2");
const erroAno = document.querySelector(".error3");
const but = document.querySelector(".botao");

let roxoDia = document.querySelector(".roxo.dia");
let roxoMes =  document.querySelector(".roxo.mes");
let roxoAno = document.querySelector(".roxo.ano");

const dia = document.getElementById("numday");
const mes = document.getElementById("nummonth");
const ano = document.getElementById("numyear");

function calculo (diaValue, mesValue, anoValue){
  
  let diaResul = diaAtual - diaValue;
  let mesResul = mesAtual - mesValue;
  let anoResul = anoAtual - anoValue;

  if (diaResul < 1) {
      mesResul --;
      const ultimoDiaMesPassado = new Date (anoAtual, mesAtual -1,  0).getDate();
      diaResul += ultimoDiaMesPassado;
  }
  
  if (mesResul < 0) {
    anoResul--;
    mesResul += 12;
  }
  
  if (anoResul == 0){
    anoResul + anoAtual
  }


  return {
    diaResul,
    mesResul,
    anoResul,
  }
  
}

  


but.addEventListener("click", (e) => {
  e.preventDefault();

  const diaValue = Number(dia.value);
  const mesValue = Number(mes.value);
  const anoValue = Number(ano.value);

  const resultado = calculo( diaValue, mesValue, anoValue);

  if ( diaValue <= 0 || diaValue > 31 || resultado.diaResul === diaAtual ) {
     erroDia.classList.add("error1-disabled")
     roxoDia.innerText = "- -";
     console.log("erro")
     
     
  } else  {
    erroDia.classList.remove("error1-disabled");
    roxoDia.innerText = resultado.diaResul;
  } 
  
  if ( mesValue < 1 || mesValue > 12 || resultado.mesResul === mesAtual)  {
      erroMes.classList.add("error2-disabled")
      //console.log("erro")
      roxoDia.innerText = "- -";

    } else {
      erroMes.classList.remove("error2-disabled");
      roxoMes.innerText = resultado.mesResul;
    }  
    
    if ( anoValue > anoAtual || anoValue < 1 || resultado.anoResul === anoAtual){
    erroAno.classList.add("error3-disabled")
    //console.log("erro")   
    roxoDia.innerText = "- -";
  } else {
    erroAno.classList.remove("error3-disabled");
    roxoAno.innerText = resultado.anoResul;
  }
 

  setTimeout(() => 
  {
    erroDia.classList.remove("error1-disabled")
    erroMes.classList.remove("error2-disabled")
    erroAno.classList.remove("error3-disabled")
  },

3000);

  but.classList.add("botao_resultado"); 
    setTimeout(() => {
      roxoAno.innerText = "- -";
      roxoMes.innerText = "- -";
      roxoDia.innerText = "- -";
    }, 10000);
    
    setTimeout(() => {
      but.classList.remove("botao_resultado");
    }, 5000);
    console.log(resultado.diaResul)
  
  
});


    
  






