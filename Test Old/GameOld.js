//https://www.youtube.com/watch?v=JP3eYU137t8

//Contruir uma classe

/*
class Game {
    constructor() {
        this.userName = ""; //vai vir do InputName
        this.points = 5; //Numero maximo de pontos
        this.jogada = [
            "./assets/Papel.png",
            "../assets/Pedra.png",
            "../assets/Tesoura.png",
            "./assets/Papel.png",
            "../assets/Pedra.png",
            "../assets/Tesoura.png",
        ];
        this.jogadaSelecionada = [];
    }
*/

let jogadorEscolha = 0;
let jogadorPontuacao = 0;
let computadorEscolha = 0;
let computadorPontuacao = 0;
let vencedor = -1;


 jogar(escolha) {
    jogadorEscolha = escolha;
    console.log(escolha);
    computadorEscolha = Math.floor(Math.random() * 3);
       
    // 1 - Pedra
    // 2 - Papel
    // 3 - Tesoura 

        if(jogadorEscolha === computadorEscolha ) { 
            vencedor = 0;
        } 
        else if ((jogadorEscolha == 1) && (computadorEscolha == 2)) {
            vencedor = 2;
        } 
        else if ((jogadorEscolha == 1) && (computadorEscolha == 3)) {
            vencedor = 1;
        }
        else if ((jogadorEscolha == 2) && (computadorEscolha == 1)) {
            vencedor = 1;
        }
        else if ((jogadorEscolha == 2) && (computadorEscolha == 3)) {
            vencedor = 2;
        }
        else if ((jogadorEscolha == 3) && (computadorEscolha == 1)) {
            vencedor = 2;
        }
        else if ((jogadorEscolha == 3) && (computadorEscolha == 2)) {
            vencedor = 1;
        }


        document.getElementById("jogador-escolha-1").classList.remove('selecionado');
        document.getElementById("jogador-escolha-2").classList.remove('selecionado');
        document.getElementById("jogador-escolha-3").classList.remove('selecionado');
        document.getElementById("computador-escolha-1").classList.remove('selecionado');
        document.getElementById("computador-escolha-2").classList.remove('selecionado');
        document.getElementById("computador-escolha-3").classList.remove('selecionado');



        document.getElementById("joagador-escolha-" + jogadorEscolha).classList.add('selecionado');
        document.getElementById("computador-escolha-" + computadorEscolha).classList.add('selecionado');
        
        if (vencedor == 0) {
            document.getElementById('mensagem').innerHTML ='Empate';
        } else if (ganhador == 1) {
            document.getElementById('mensagem').innerHTML ='Joagador Ganhou!';
            jogadorPontuacao ++;
        } else if (ganhador == 2) {
            document.getElementById('mensagens').innerHTML = 'Computador ganhou!';
            computadorPontuacao ++;
        }

        document.getElementbyId('jogador-pontos').innerHTML = jogadorPontuacao;
        document.getElementById('computador-pontos').innerHTML = computadorPontuacao;


}


/*
if (vencedor == 0) {
    document.getElementById('mensagem').innerHTML ='Empate';
}else if (vencedor = 1) {
    document.getElementById('mensagem').innerHTML ='Jogador ganhou!';
}else if (vencedor = 2) {
    document.getElementById('mensagem').innerHTML ='Computador ganhou!';
}
*/


}