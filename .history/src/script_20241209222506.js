let samanta = window.document.getElementById("samanta");
let leonardo = window.document.getElementById("leonardo");
let bruna = window.document.getElementById("bruna");
let setaEsquerda = window.document.getElementById("seta-direta");
let setaDireita = window.document.getElementById("seta-esquerda");

function rolarParaDireita() {
  leonardo.style = "display:none";
  samanta.style = "display:flex";
  bruna.style = "display:flex";
  setaDireita = "display:none";
  setaEsquerda = "display:flex";
}

function rolarParaEsquerda() {
  leonardo.style = "display:flex";
  samanta.style = "display:none";
  bruna.style = "display:flex";
  setaDireita = "display:flex";
  setaEsquerda = "display:none";
}
