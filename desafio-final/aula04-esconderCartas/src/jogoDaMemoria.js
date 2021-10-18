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
        this.iconePadrao = './arquivos/ozzy.png'
        this.heroisEscondidos = []
    }
    // vai inicializar a tela
    // para usar o this, não podemos usar o static
    inicializar() {
        // vai pegar todas as funçoes da classe tela
        this.tela.atualizarImagens(this.heroisIniciais) // coloca todos os herois na tela
        // Força a tela usar o This de Jogo da Memoria usando o .bind
        this.tela.configurarBotaoJogar(this.jogar.bind(this)) // so vai passar a funçao jogar qndo acontecer um click
        
    }
    embaralhar() {
        const copias = this.heroisIniciais
        // duplicar os itens
        .concat(this.heroisIniciais)
        //ENTrar em cada item e criar um id aleatorio
        //.assign é para concatenar o objeto
        .map(item => {
            return Object.assign({}, item, {id: Math.random() /0.5})
        })
        // .sort é Ordenar e bagunçar os herois
        .sort(()=> Math.random() - 0.5)

        this.tela.atualizarImagens(copias)
        setTimeout(() => {
            this.esconderHerois(copias)            
        }, 1000);
         
    }
    esconderHerois(herois) {
        const heroisOcultos = herois.map(({ nome, id }) => ({
            id,
            nome,
            img: this.iconePadrao 
        }))
        this.tela.atualizarImagens(heroisOcultos)
        this.heroisOcultos = heroisOcultos
    }
    jogar() {
        this.embaralhar()
    }
    
}