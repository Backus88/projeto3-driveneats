function botaoliberado() {
    const botao = document.querySelector(".botaofinalizar");
    const inicial = '<p>Selecione os 3 itens <br></br> para fechar o pedido</p>';
    if ((document.querySelector(".selecionado-principal"))&&(document.querySelector(".selecionado-bebida"))&&document.querySelector(".selecionado-sobremesa")){
        botao.classList.add("botaoliberado");
        botao.innerHTML = "Finalizar o Pedido";
        return true;
    }else{
        botao.classList.remove("botaoliberado");
        botao.innerHTML = inicial;
        return false;
    }
    
}

function selecionar(elemento,tipoItem) {
    const setado = document.querySelector("." +tipoItem);
    if(setado !== null){
        setado.classList.remove(tipoItem);
    }
    if(setado === elemento){
        setado.classList.remove(tipoItem);
    }else {
        elemento.classList.add(tipoItem);
    }
    botaoliberado(); 
}

function getItens() {
    if(botaoliberado()){
        const prato = document.querySelector(".selecionado-principal h3").innerHTML;
        const bebida = document.querySelector(".selecionado-bebida h3").innerHTML;
        const sobremesa = document.querySelector(".selecionado-sobremesa h3").innerHTML;
        const precoPrato = Number(document.querySelector(".selecionado-principal h4").innerHTML.replace('R$','').replace(',','.'));
        const precoBebida =  Number(document.querySelector(".selecionado-bebida h4").innerHTML.replace('R$','').replace(',','.'));
        const precoSobremesa = Number(document.querySelector(".selecionado-sobremesa h4").innerHTML.replace('R$','').replace(',','.'));
        let total = precoPrato + precoBebida + precoSobremesa;
        return[prato,precoPrato,bebida,precoBebida,sobremesa,precoSobremesa,total]
    }
}

function confirmacao(){

    if(botaoliberado()){
        const elemento = document.querySelector(".confirmar");
        const fundo = document.querySelector(".fundo");
        elemento.classList.add("telaconfirmacao");
        fundo.classList.add("fundovisivel");
        const informacoes = getItens();
        document.querySelector(".titulo").classList.add("menuinvisivel");
        document.querySelector(".finalizar").classList.add("menuinvisivel");
        document.querySelector(".corpo").classList.add("corpomargem");

        elemento.querySelector(".prato h1").innerHTML = informacoes[0];
        elemento.querySelector(".prato h2").innerHTML = informacoes[1].toFixed(2).replace(".", ",");
        elemento.querySelector(".bebida h1").innerHTML = informacoes[2];
        elemento.querySelector(".bebida h2").innerHTML = informacoes[3].toFixed(2).replace(".", ",");
        elemento.querySelector(".sobremesa h1").innerHTML = informacoes[4];
        elemento.querySelector(".sobremesa h2").innerHTML = informacoes[5].toFixed(2).replace(".", ",");
        elemento.querySelector(".total h1").innerHTML = "Total"
        elemento.querySelector(".total h2").innerHTML = "R$" + informacoes[6].toFixed(2).replace(".", ",");
    }
    
}
function getInfo(){
    const endereco = prompt("Digite seu endereço");
    const nome = prompt("Digite seu nome");
    return [endereco,nome];
}

function mensagemWp(){
    const informacoes = getItens();
    const dados = getInfo();
    const mensagem = `Olá, gostaria de fazer o pedido:
- Prato: ${informacoes[0]}
- Bebida: ${informacoes[2]}
- Sobremesa: ${informacoes[4]}
Total: R$ ${informacoes[6].toFixed(2)}

Nome: ${dados[0]}
Endereço: ${dados[1]}`;
    window.open("https:/wa.me/5571981086378?text=" + window.encodeURIComponent(mensagem));
}

function cancelar(){
    document.querySelector(".titulo").classList.remove("menuinvisivel");
    document.querySelector(".finalizar").classList.remove("menuinvisivel");
    document.querySelector(".confirmar").classList.remove("telaconfirmacao");
    document.querySelector(".fundo").classList.remove("fundovisivel");
    document.querySelector(".corpo").classList.remove("corpomargem");

}


    
