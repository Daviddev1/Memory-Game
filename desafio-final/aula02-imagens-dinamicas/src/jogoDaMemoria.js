class JogoDaMemoria {
    // se mandar um obj = { tela: 1, idade: 2, etc: 3}
    // vai ignorar o resto das propriedades e pegar somente a propriedade tela

    constructor({ tela }) {
        this.tela = tela
        // caminho do arquivo, sempre relativo ao index.html
        this.heroisIniciais = [
            {img: './arquivos/batman.png', name: 'batman'},
            {img: './arquivos/capitao.png', name: 'capitao'},
            {img: './arquivos/flash.png', name: 'flash'},
            {img: './arquivos/hulk.png', name: 'hulk'}
        ]
    }
    // vai inicializar a tela
    // para usar o this, não podemos usar o static
    inicializar() {
        // vai pegar todas as funçoes da classe tela
        this.tela.atualizarImagens(this.heroisIniciais) // coloca todos os herois na tela

    }
}