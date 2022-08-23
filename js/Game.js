// Manipular o DOM
//instanciando nossa classe Game

const game = new NewGame();
const buttonStart = document.getElementById("#jogar");
const buttonReset = document.getElementById("#reset");
const selecionadoJogador = document.getElementById("#inicio");
const inputName = document.querySelector("#inicio input");
const name = document.querySelector("#name");
const points = document.querySelector("#points");
const score = document.querySelector("#score");
const jogada = 0;

buttonStart.addEventListener("click", jogar() => {
if (selecionadoJogador === true) {
    
    
    document.getElementById(" ").checked == true;
    selecionadoJogador = 
  //adicionar o nome na div score
  name.innerText = game.userName;
  //adicionar os points na div score
  points.innerText = game.points;
}


})

    