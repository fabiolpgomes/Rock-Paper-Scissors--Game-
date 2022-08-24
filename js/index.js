    let info = {
    rodada: 0,
    jogador: 0,
    computador: 0,
    empate: 0, 
}
   // document.getElementById("jogar-novamente").style.display = "none";

function jogar(){
    
    if(document.getElementById("pedra").checked == false &&
     document.getElementById("papel").checked == false &&
     document.getElementById("tesoura").checked == false) {
        alert("Selecione uma opcao: Pedra, Papel ou Tesoura");
    } else {
        info.rodada++;
        console.log(`rodada:${info.rodada}`);

        let ramPc = Math.floor(Math.random() * 3) ;
        
        switch(ramPc) {
            case 0: document.getElementById("pc").src="../assets/PcPedra.png";
            break;
            case 1: document.getElementById("pc").src="../assets/PcPapel.png";
            break;
            case 2: document.getElementById("pc").src="../assets/PcTesoura.png";
            break;
        }
        
        
        //verificar o vencedor
        if((document.getElementById("pedra").checked == true && ramPc == 0) ||
        (document.getElementById("papel").checked == true && ramPc == 1) ||
        (document.getElementById("tesoura").checked == true && ramPc == 2)) {
            document.getElementById("placar").innerHTML="Empate";
           info.empate++; 
           console.log(`empate:${info.empate}`);

            

        } else if ((document.getElementById("pedra").checked == true && ramPc == 2) ||
        (document.getElementById("papel").checked == true && ramPc == 0) ||
        (document.getElementById("tesoura").checked == true && ramPc == 1)) {
            document.getElementById("placar").innerHTML="Jogador Venceu";
            info.jogador++
            console.log(`jogador:${info.jogador}`);
            document.getElementById("jogador-pontos").innerText = `${info.jogador}`


        } else {
            document.getElementById("placar").innerHTML="Computador Venceu"; 
            info.computador++;
            console.log(`computador:${info.computador}`);
            document.getElementById("computador-pontos").innerText = `${info.computador}`
        }
        
        if(info.rodada === 5) {
            document.getElementById("jogar").style.display = "none";
            document.getElementById("reset").style.display = "none";
            document.getElementById("versus").style.display = "none";
            document.getElementById("computador").style.display = "none";
            document.getElementById("placar").style.display = "none";
            document.getElementById("formJokenpo").style.display = "none";
            document.getElementById('jogar-novamente').style.display = "flex";

           // document.getElementById("resultadoJogador").innerHTML = "jogador";
           // jogadorPt.innerText = info.jogador; Outra opcao mais clara 
            const jogadas = document.getElementById("numeroJogadas").innerText = info.rodada
            const empate = document.getElementById("resultadoEmpate").innerText = info.empate
            const jogadorPt = document.getElementById("resultadoJogador").innerText = info.jogador
            const computadorPt = document.getElementById("resultadoComputador").innerText = info.computador
            const ganhador = document.getElementById("resultadoEmpate").innerText = info.empate
           
            
            if(info.jogador > info.computador) {
            const vencedorJogador = document.getElementById("resultadoGanhador").innerText = "Jogador"
            } else if (info.computador > info.jogador){
            const vencedorComputador = document.getElementById("resultadoGanhador").innerText = "Computador"
            } else if (info.jogador === info.computador){
            const vencedorEmpate = document.getElementById("resultadoGanhador").innerText = "Empate"
            }
            
            
           /* 
            console.log(`===FINAL DO JOGO===`);
            console.log(`computador:${info.computador}`);
            console.log(`jogador:${info.jogador}`);
            console.log(`empate:${info.empate}`);  */


        }
        
        
    }
    
}
    

function reset(){
    document.getElementById("pc").src="../assets/PC.png"
    document.getElementById("placar").innerHTML="";
      
    document.getElementById("pedra").checked = false;
    document.getElementById("papel").checked = false;
    document.getElementById("tesoura").checked = false;
}

function jogarnovamente() {
    document.location.reload(true);
}



