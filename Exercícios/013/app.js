function Mensagem(){
    let periodo = document.querySelector("#periodo").value;
    let mensagem = "";

    if(periodo == "M"){
        mensagem = "Bom Dia";
    }else if(periodo == "V"){
        mensagem = "Boa Tarde";
    }else if (periodo == "N"){
        mensagem = "Boa Noite";
    }else{
        mensagem = " - ";
    }

    document.querySelector("#resposta").innerHTML = mensagem;
}