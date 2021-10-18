
let frutaExistenteNoMercado = false
let temCPUsuficiente = true

/////////////////////////////
// Obter valores do terminal
const args = process.argv
const saldo = args[args.length -1]
//console.log('args', args)
console.log('saldo', saldo)
if(isNaN(saldo)) /* 1ª coisa: Vou verificar se ele é Not a Number, se ele for NaN, significa que ele é uma string, ou um numero valido dentro de uma string*/ 
 {
    console.log('valor invalido!!')
    return;
 //////////////////////////////////////////   
}
 let tipoCliente = 'premium'
    if (saldo < 9) {
        tipoCliente = 'basic'
    }
    else if (saldo >=10 && saldo < 20) {
        tipoCliente = 'gold'

    }
    else {
        tipoCliente = null
    }
 // tudo o que for null, undefined, vazio, 0 === false na hora de converter para o JS.

 /* Se o tipoCliente NÃO FOR FASLSE (!), será tipo indefinido*/
 if(!tipoCliente) {
     tipoCliente = 'indefinido'
 }
console.log('tipoCliente', tipoCliente)
/////////////////////////////////////////////
/* Usando If e Else como Ternario */
const operadorOu = 1 > 2 || 2 > 1
const operadorE = 1 === 1 && 2 !== 2
const operadorNot = !(1==1)

//Usando Ternario
const idade = 18
/* Vou perguntar: a idade é maior ou igual a 18??*/
const resultado = idade >= 18 ?
/* Se for, pode entrar. Se não eu coloco os dois pontos (:), e coloco qual seria o ELSE */
                "pode entrar" : 'não pode entrar'
console.log("resultado", resultado)                


