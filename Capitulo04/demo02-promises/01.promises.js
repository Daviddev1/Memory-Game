// O objetivo aqui é sincronizar os valores a cada chamada, guardar ele numa variavel e mostrar no final

const { rejects } = require('assert')
const { networkInterfaces } = require('os')
const readline = require('readline') // pegar do terminal do cliente e tranformar em promises
const terminal = readline.createInterface({
    input: process.stdin, // redirecioar entrada para o terminal 
    output: process.stdout // redirecionar saida para o terminal
})

//terminal.question('Qual é o seu nome?\n', nome => {
//    terminal.question('Qual seu telefone?\n', telefone => {
//        console.log(
//            `
//            Nome: ${nome},
//            Tefefone: ${telefone}
//            `
//
//        )
//        terminal.close()
//    })
//})

// COlocoar em forma de promises

function questionAsync(texto){
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, resolve)
    })

}

let nome = ""
let telefone = ""
Promise.resolve()
       .then(() => questionAsync('Qual é o seu nome?')) 
       .then(respostaNome => {
           if (!respostaNome) throw new Error ('campo vazio!!')
           nome = respostaNome
       })
       .then(() => questionAsync('Qual é o seu telefone?'))
       .then(respostaTelefone => {
           if (!respostaTelefone) throw new Error ('campo vazio!')
           telefone = respostaTelefone
       })
       .then(() => {
           console.log(`Nome: ${nome}, Telefone: ${telefone}`)
       })
       .catch(error => {
           console.error('Deu ruim!!!', error.stack)
       })
       .finally(()=> terminal.close())

// ERRO  UnhandledPromiseRejectionWarning: Error: campo vazio!!  => Falta pegar o Catch do erro, falta manipular o erro



