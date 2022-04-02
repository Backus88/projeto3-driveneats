function selecionar(elemento,tipoItem) {
    const setado = document.querySelector("." +tipoItem);
    const botao = document.querySelector(".botaofinalizar");
    const inicial = '<p>Selecione os 3 itens <br></br> para fechar o pedido</p>';
    
    if(setado !== null){
        setado.classList.remove(tipoItem);
    }
    if(setado === elemento){
        setado.classList.remove(tipoItem);
    }else {
        elemento.classList.add(tipoItem);
    }
    
    if ((document.querySelector(".selecionado-principal"))&&(document.querySelector(".selecionado-bebida"))&&document.querySelector(".selecionado-sobremesa")){
        botao.classList.add("botaoliberado");
        botao.innerHTML = "Finalizar o Pedido";
    }else{
        botao.classList.remove("botaoliberado");
        botao.innerHTML = inicial;
    }
}