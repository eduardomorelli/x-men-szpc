//pegando todos os personagens no JS para poder verificar quando o mouse for passado em cima de tal personagem
const personagens = document.querySelectorAll('.personagem');

//adicionando a classe selecionado no personagem que o mouse passar em cima (linha 12 tbm)
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth <450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        
        //verificando se já existe um personagem selecionado, se sim, remover a seleção antiga, e adicionar o novo personagem
        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        //pegando o elemento do personagem e alterando a imagem do personagem grande
        alterarImagemPersonagemSelecionado(personagem);

        //alterando o nome do personagem
        alterarNomePersonagemSelecionado(personagem);

        //alterando a descrição do personagem
        alterarDescricaoPersonagem(personagem);

    })
})


function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    //alterando a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

