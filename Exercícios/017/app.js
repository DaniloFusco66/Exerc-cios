function ParOuImpar(){
    let numero = document.querySelector("#numero").ariaValueMax;
    let mensagem = "";

    if(numero%2 ==0){
        mensagem= "Par";
    }else{
        mensagem ="Ímpar";
    }

    document.querySelector("#resposta").innerHTML = mensagem;
}