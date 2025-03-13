const data = new Date();

const diaAtual = data.getDate();
const mesAtual = data.getMonth()+1;
const anoAtual = data.getFullYear();

const erroDia = document.querySelector(".error1");
const erroMes = document.querySelector(".error2");
const erroAno = document.querySelector(".error3");
const but = document.querySelector(".botao");

const dia = document.getElementById("numday");
const mes = document.getElementById("nummonth");
const ano = document.getElementById("numyear");





but.addEventListener("click", (e) => {
  e.preventDefault();
  
  
const diaValue = Number(dia.value);
const mesValue = Number(mes.value);
const anoValue = Number(ano.value);


  if ( diaValue < 1 || diaValue > 31) {
     erroDia.classList.add("error1-disabled")
     console.log("erro")

  } else  {
    erroDia.classList.remove("error1-disabled");
  } 
  
  if ( mesValue < 1 || mesValue > 12)  {
      erroMes.classList.add("error2-disabled")
      //console.log("erro")

    } else {
      erroMes.classList.remove("error2-disabled");
    }  
    
    if ( anoValue > anoAtual ) {
    erroAno.classList.add("error3-disabled")
    //console.log("erro")   

  } else {
    erroAno.classList.remove("error3-disabled");
  }

  setTimeout(() => 
  {
    erroDia.classList.remove("error1-disabled")
    erroMes.classList.remove("error2-disabled")
    erroAno.classList.remove("error3-disabled")
  },

3000);
    
let diaResul = diaAtual - diaValue;
  let mesResul = mesAtual - mesValue;
  let anoResul = anoAtual - anoValue;
    
  if (diaResul < 0) {
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

  document.querySelector(".roxo.ano").innerText = anoResul;
  document.querySelector(".roxo.mes").innerText = mesResul;
   document.querySelector(".roxo.dia").innerText = diaResul;

  console.log(diaResul, mesResul, anoResul)



});


    
  






