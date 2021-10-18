class JogoDaMemoria {
    // se mandar um obj = { tela: 1, idade: 2, etc: 3}
    // vai ignorar o resto das propriedades e pegar somente a propriedade tela

    constructor({ tela, util }) {
        this.tela = tela
        this.util = util
        // caminho do arquivo, sempre relativo ao index.html
        this.heroisIniciais = [
            {img: './arquivos/batman.png', nome: 'batman'},
            {img: './arquivos/capitao.png', nome: 'capitao'},
            {img: './arquivos/flash.png', nome: 'flash'},
            {img: './arquivos/hulk.png', nome: 'hulk'}
        ]
        this.iconePadrao = './arquivos/ozzy.png'
        this.heroisEscondidos = []
        this.heroisSelecionados = []
    }
    // vai inicializar a tela
    // para usar o this, não podemos usar o static
    inicializar() {
        // vai pegar todas as funçoes da classe tela
        this.tela.atualizarImagens(this.heroisIniciais) // coloca todos os herois na tela
        // Força a tela usar o This de Jogo da Memoria usando o .bind
        this.tela.configurarBotaoJogar(this.jogar.bind(this)) // so vai passar a funçao jogar qndo acontecer um click
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
        this.tela.configurarBotaoMostrarTudo(this.mostrarHeroisEscondidos.bind(this))                
    }
    async embaralhar() {
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
        this.tela.exibirCarregando()

        const idDoIntervalo = this.tela.iniciarContador()

        //vamos esperar 3 segundos para limpar a tela
        await this.util.timeout(3000)   
        this.tela.limparContador(idDoIntervalo) 
        this.esconderHerois(copias) 
        this.tela.exibirCarregando(false)           
     
         
    }
    esconderHerois(herois) {
        const heroisOcultos = herois.map(({ nome, id }) => ({
            id,
            nome,
            img: this.iconePadrao 
        }))
        this.tela.atualizarImagens(heroisOcultos)
        this.heroisEscondidos = heroisOcultos
    }
    exibirHerois(nomeDoHeroi) {
        // vamos procurar esse heroi pelo nome em nossos heroisIniciais
        // vamos obter somente a imagem dele
        const{ img } = this.heroisIniciais.find(({ nome }) => nomeDoHeroi === nome )
        // vamos criar a funcao na tela, para exibir somente o heroi selecionado
        this.tela.exibirHerois(nomeDoHeroi, img)
    }
    verificarSelecao(id, nome) {
        const item = {id, nome}
        // vamos verificar a qntidade de herois selecionados e tomar a açao se escolheu certo ou errado
        const heroisSelecionados = this.heroisSelecionados.length
        switch(heroisSelecionados) {
            case 0: 
                // adiciona a escolha na lista, esperando pela proxima clicada
                this.heroisSelecionados.push(item)
                break;
            case 1: 
                // se a qntidade de escolhidos for 1, significa que o usuario só pode escolher mais um
                // vamos obter o primeiro item da lista
                const [ opcao1 ] = this.heroisSelecionados
                // zerar itens para nao selecionar mais de dois
                this.heroisSelecionados = []
                // conferimos se os nomes e ids batem conforme o esperado
                if (opcao1.nome === item.nome && opcao1.id !== item.id) {
                    this.exibirHerois(item.nome)
                    this.tela.exibirMensagem()
                    // parar a execução
                    return;
                } 
                // aqui verificamos se são ids diferentes para o usuario não clicar duas vezes no mesmo

                this.tela.exibirMensagem(false)
                // fim do case
                break;
        }
    }
    mostrarHeroisEscondidos(){
        //vamos pegar todos os herois da tela e colocar seu respectivo valor correto
        const heroisEscondidos = this.heroisEscondidos
        for(const heroi of heroisEscondidos) {
            const { img } = this.heroisIniciais.find(item => item.nome === heroi.nome)
            heroi.img = img
        }
        this.tela.atualizarImagens(heroisEscondidos )
    }
    jogar() {
        this.embaralhar()
    }
    
}