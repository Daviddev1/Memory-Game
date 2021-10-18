// Importar o Matematica utilizando require

const Matematica = require('./matematica')
//console.log(Matematica)
//console.log(Matematica.somar(1, 4))

const readLine = require('readline')
const terminal = readLine.createInterface({
    input: process.stdin, // Entrada pelo terminal
    output: process.stdout // Saida pelo terminal
})

//coloccar as perguntas
//Estamos fazendo uma função dentro da outra pq precisamos primeiro pegar o valor do cliente e depois que ele colocou o primeiro valor, vc pode colocar o segundo valor        

terminal.question('Insira o primeiro valor\n', valor1 => {
    terminal.question('Insira o segundo valor\n', valor2 => {
        terminal.question('Insira a operação\n', tipoOperacao => {
            const resultado = Matematica[tipoOperacao](
                Number(valor1), Number(valor2)
            )
            console.log(
                `A operação ${tipoOperacao} de ${valor1} e ${valor2} é: ${resultado}`
            ) // A classe é convertida para Objeto, e para acessar objteto pode usar ponto (.) ou colchetes []
            terminal.close() // Para liberar o terminal qndo acabar a execução
        })
   })
})

// Pegar o texto no terminal e chamar a função sob demanda que o clinte escolher

