// Datas são formatos humanos.
//O computador entende como tudo milisegundos, numeros

// Meses começam do ZERO
const dataAniversario = new Date(2020, 0, 20)
console.log(dataAniversario)

// Pegar primeira data do JS, para entender qndo tudo começou no JS
const primeiraDataDoJS = new Date(0)
console.log(primeiraDataDoJS)

const hoje = new Date()
console.log(hoje.toString()) //data agora

console.log(hoje.toLocaleDateString())// pra ver qual é data do local da sua maquina

// Formato GLOBAL recomendado para data
console.log(hoje.toISOString())

//const dia = hoje.getDate //(GET)pegar dia de hoje
console.log(hoje.getDate())

const dia = hoje.getDate()
//hoje.setDate(dia + 5) // (SET)Alternar o dia, + 5 dias depois de hoje
//hoje.setHours(10, 30, 20, 10) //Pode definir horas

console.log( `
    Dia: ${hoje.getDate()}
    Mes: ${hoje.getMonth()}
    Ano: ${hoje.getUTCFullYear()}
    Hora: ${hoje.getHours()}
    Minute: ${hoje.getMinutes()}
    Seconds: ${hoje.getSeconds()}`
)

// COMParar 2 datas usando operadores
    console.log(
        new Date(2020, 1, 20) > new Date(2000, 1, 1)
    )


