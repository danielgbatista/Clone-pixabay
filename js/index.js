"use strict";

const limparElementos = (elemento) => {
    while (elemento.firstChild){
        elemento.removeChild(elemento.lastChild)
    }
}

const pesquisarObjetos = async (evento) => {
    if(evento.key == 'Enter'){
        const pesquisa = evento.target.value
        const url = `https://pixabay.com/api/?key=24138186-d7da25cdc400a217bf7b9e206&q=${pesquisa}&image_type=all`
        const response = await fetch(url)
        const imagens = await response.json()
        
        limparElementos(document.querySelector('#galeria-container'))
        carregarGaleria(imagens.hits)
    }
}

const criarItem = (imagem) => {
    const container = document.querySelector('#galeria-container')
    const novoCard = document.createElement("div")
    novoCard.classList.add("galeria-itens")
    novoCard.
    innerHTML = `
                <img src="${imagem.webformatURL} " alt="">
                `
    container.append(novoCard)
}

const carregarGaleria = (imagens) => imagens.forEach(criarItem)

document.querySelector('#pesquisa input').addEventListener('keypress', pesquisarObjetos)