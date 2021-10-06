function MaiorNumero(){
    let numero1 = parsefloat(document.querySelector("#numero01").value);
    let numero2 = parsefloat(document.querySelector("#numero02").value);
    let numero3 = parsefloat(document.querySelector("#numero03").value);
    let maiorNumero = 0;

    if(numero1> numero2 && numero1 > numero3){
        maiorNumero = numero1;
    }else if((numero2 > numero1) && (numero2 > numero3)){
        maiorNumero + numero2;   
    }else{
        maiorNumero = numero3;
    }

    document.querySelector("#resposta").innerHTML = "o maior número é: " + maiorNumero;
}