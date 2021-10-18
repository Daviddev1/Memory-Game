class Heroi {
    atacar(){
        console.log('atacou!!!!')
    }
    defender(){
        console.log('defendeu')
    }
}

const heroi = new Heroi() // vou instanciar uma classe chamando a palavra New
heroi.atacar() // chamei atacar e defendeer
heroi.defender()

// Usando o CONSTRUCTOR
    // o construtor será uma função que será invocada ao chamar a palavra NEW
class Heroi2 {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    atacar(){
        console.log(
            `O ${this.nome} Atacou!!`
        )
    }
}

const heroi2 = new Heroi2(
    `Flash`, 80
)
heroi2.atacar()

// vc pode antes de tudo declarar so os valores da entidade e depois só chamar as funçoes da sua classe

////////////////////////////////////////////

// STATIC => Substui o THis e não precisa usar a palavra chave NEW
// static é conhecido como função helper. 
// static cria dentro da função e ele morre logo apos que a função foi criada.

class Heroi3 {
    static obterAnoNascimento(idade) {
        return 2020 -idade
    }
}
const AnoNascimento = Heroi3.obterAnoNascimento(19)
console.log(
    `O ano de nascimento do Heroi é ${AnoNascimento}`
)
//////////////////////////////////////////////////////////

class Test{
    constructor() {
        console.log('Ola ')
    }
}
new Test()

  




















