const ID_CONTEUDO = "conteudo"
const ID_BTN_JOGAR = "jogar"
class Tela{
    static obterCodigoHtml(item) {
        return `
        <div class="col-md-3">
            <div class="card" style="width: 50%;">
                <img src="${item.img}" name= "${item.nome}" class="card-img-top" alt="...">
                </div> 
                <br />
        </div>
        `
    }
    static alterarConteudoHtml(codigoHtml) {
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHtml // innerhtml é para passar o codigo html

    }
    // Gerar string pela imagem
    static gerarStringHtmlPelaImagem(itens) {
        // para cada item da lista, vai executar a função obterCodigoHtml
        //Ao final vai concatenar tudo em uma unica String
        // muda de Array para String
        return itens.map(Tela.obterCodigoHtml).join('') // O .map vai passar por cada um dos itens e vai chamar a funçao q está dentro dele para cada um dos itens
        // O .join vai pegar o array e ajuntar ele todo de acordo com o separador que eu escolher

    }
    static atualizarImagens(itens) {
        const codigoHtml = Tela.gerarStringHtmlPelaImagem(itens)
        Tela.alterarConteudoHtml(codigoHtml)

    }
    static configurarBotaoJogar(funcaoOnClick) {
        const btnJogar = document.getElementById(ID_BTN_JOGAR)
        btnJogar.onclick = funcaoOnClick
    }
}