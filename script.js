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



function mensagemWp() {
    if(botaoliberado()){
        const prato = document.querySelector(".selecionado-principal h3").innerHTML;
        const bebida = document.querySelector(".selecionado-bebida h3").innerHTML;
        const sobremesa = document.querySelector(".selecionado-sobremesa h3").innerHTML;
        let total = Number(document.querySelector(".selecionado-principal h4").innerHTML.replace('R$','').replace(',','.')) +
         Number(document.querySelector(".selecionado-bebida h4").innerHTML.replace('R$','').replace(',','.')) + 
         Number(document.querySelector(".selecionado-sobremesa h4").innerHTML.replace('R$','').replace(',','.'));
         alert(total);

        const mensagem = `Olá, gostaria de fazer o pedido:
- Prato: ${prato}
- Bebida: ${bebida}
- Sobremesa: ${sobremesa}
Total: R$ ${total.toFixed(2)}`;
        alert(mensagem);

        window.open("https:/wa.me/5571981086378?text=" + window.encodeURIComponent(mensagem));
    }
    
}