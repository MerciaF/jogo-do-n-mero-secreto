//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do número secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um numéro entre 1 e 10";
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function exibirMensagemInicial (){
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
   
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("p", "O número secreto é menor");
        }else{
            exibirTextoNaTela("p", "O número secreto é maior");
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
/*function olaMundo(){
    console.log("Olá mundo");
}
olaMundo();

function nomeParametro(nome){
    console.log(`Olá ${nome}`);
}

nomeParametro("Mércia");

function dobroNumero(numero){
    return numero * 2;
}
let resultadoDobro = dobroNumero(2);
console.log(resultadoDobro);

function retornoMedia(a, b, c){
    return ((a + b + c)/3);
}
let media = retornoMedia(6, 8, 10);
console.log(media);

function retornaMaior(a, b){
    return a > b ? a : b;
}
let maior = retornaMaior(40, 30);
console.log(maior);

function resultadoMultiplicacao(numero){
    return numero * numero;
}
let multiplicacao = resultadoMultiplicacao(10);
console.log(multiplicacao);*/