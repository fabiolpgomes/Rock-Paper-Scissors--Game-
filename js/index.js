//manipulando o dom
//instanciando nossa classe Game

function jogar(){
    if(document.getElementById("pedra").checked == false &&
     document.getElementById("papel").checked == false &&
     document.getElementById("tesoura").checked == false) {
        alert("Selecione uma opcao: Pedra, Papel ou Tesoura");
    } else {
        let ramPc = Math.floor(Math.random() * 3) ;
        console.log(ramPc);
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
            

        } else if ((document.getElementById("pedra").checked == true && ramPc == 2) ||
        (document.getElementById("papel").checked == true && ramPc == 0) ||
        (document.getElementById("tesoura").checked == true && ramPc == 1)) {
            document.getElementById("placar").innerHTML="Jogador Venceu";
        
        } else {
            document.getElementById("placar").innerHTML="Computador Venceu"; 
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




