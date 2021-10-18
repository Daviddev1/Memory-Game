const pessoa = {
    _nome: '',
    _idade: 20,
    get nome () {
        return this._nome
    },
    set nome(valor) {
        this._nome = valor.toUpperCase()
    },

    get podeDirigir() {
        return this._idade > 18
    },
    set idade(valor) {
        this._idade = valor
    }
}

pessoa.nome = 'Bruce'
    console.log(pessoa.nome)

pessoa.idade = 16
    console.log(pessoa.podeDirigir)

    console.log(pessoa.idade)

/* 
    Na linha 12 chamei o SET por causa do sinal de (=), passo o Bruce que vai para a linha 7 que transforma o texto em caixa alta e que passa para o nome.
    
    No console.log na linha 13 chamei a funçao da linha 3 que vai referenciar o _nome, que nesse caso é BRUCE.
*/
///////////////////////////////////////////////
/*
    Depois criei uma chave chamada _idade: 20, 
    Crei uma propriedade chamada podeDirigir, ele é chamada de propriedade calculada.
    Propriedade calcula: pega a idade que é um valor privado e vai verificar se essa idade é maior que 18 dando a respota em TRUE ou FALSE.

    podeDirigir, nesse caso é uma propriedade somente com GET, se tentar passar valor para ele, ele nao vai fazer nada.

    Ao criar SET para idade com valor ele vai me reotnar FALSE, pq é menor que 18.

    Como so criei a variavel idade no SET, se tentar obter valor usando GET, ele vai trazer valor UNDEFINED, pq ele não tem a função GET  

*/

const animal = {_id: '123', get id() {return this._id } }
console.log(animal.id)


