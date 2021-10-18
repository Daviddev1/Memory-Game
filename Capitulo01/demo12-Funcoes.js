function nomeDaFuncao(parametro1) {
    // bloco de codigo
}

function queDiaHoje() {
    const data = new Date()
    console.log( `Hoje é dia: ${data.getDate()}`)
}
queDiaHoje()
/////////////////////////
function soma(valor1, valor2){
    console.log(`A soma de ${valor1} + ${valor2} é`, valor1 + valor2)
}
soma(10, 20)
soma(3, 4)
/////////////////////////////
function less(valor1, valor2) {
    console.log(`A subtração de ${valor1} - ${valor2} é:`, valor1 - valor2)
}
less(10, 6)
less(10, 20)
//////////////////////////////

// Funçoes podem retornar valores
function soma(valor1, valor2) {
    return valor1 + valor2
}
const idade = 20
const tamanho = 10
const resultado = soma(idade, tamanho)
    console.log('resultado é:', resultado)
//////////////////////////////////
function multiplicar(valor1, valor2){
    const resultado = valor1 * valor2
    return resultado
} // tudo o que é criado dentro das chaves, eles nascem e morrem dentro dessa função. Logo oq está fora não afeta o que está dentro
    console.log('O resultado da multiplicação é:', multiplicar(10, 30))
    /////////////////////

// CALCULO DE SALARIO DE 2 FUNCIONARIOS
    const funcionario1 = {
        nome: 'João',
        desconto: 0.2,
        salarioBruto: 2000,
        salarioLiquido: 0
    }

    const funcionario2 = {
        nome: "Maria",
        desconto: 0.1,
        salarioBruto: 2000,
        salarioLiquido: 0

    }

    const funcionario3 = {
        nome: "José",
        desconto: 0.3,
        salarioBruto: 2000,
        salarioLiquido: 0
    }

    const descontoFuncionario1 = 
        funcionario1.salarioBruto - ( funcionario1.desconto * funcionario1.salarioBruto )

    const descontoFuncionario2 = 
        funcionario2.salarioBruto - ( funcionario2.desconto * funcionario2.salarioBruto )    
        
        //console.log(
           // `Funcionario1: ${descontoFuncionario1}
           //  Funcionario2: ${descontoFuncionario2}` )

/* 
O que acontece se tenho novos descontos???
 Terei que adiciona-los nas formulas das linhas 57 e 60. 
 Isso seria dificil de manter, pois o codigo seria imenso para fazer as regras dos salarios liquidos das pessoas.
 Por isso usa-se as FUNÇOES 
*/
// Usando FUNÇOES para calcular salarios de funcionarios
    
    function calcularDesconto(salarioBruto, desconto) {
        return salarioBruto - (salarioBruto * desconto)
    }

    funcionario1.salarioLiquido = calcularDesconto(
        funcionario1.salarioBruto,
        funcionario1.desconto
    )

    funcionario2.salarioLiquido = calcularDesconto(
        funcionario2.salarioBruto,
        funcionario2.desconto
    )

    funcionario3.salarioLiquido = calcularDesconto(
        funcionario3.salarioBruto,
        funcionario3.desconto
    )

    console.log(
        `Salario ${funcionario1.nome}: R$ ${funcionario1.salarioLiquido}
        Salario ${funcionario2.nome}: R$ ${funcionario2.salarioLiquido}
        Salario ${funcionario3.nome}: R$ ${funcionario3.salarioLiquido}`
    )


        






