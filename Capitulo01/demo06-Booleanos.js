//se a variavel podeDirigir for TRUE, ele vai mostrar o console.log
// se for falso ele vai ignorar o q tem dentro do ""

/*
const podeDirigir = false
    if(podeDirigir) {
        console.log("Ela pode dirigir")
    }
*/


// Se eu mudar para TRUE ela mostra o resultado.
const podeDirigir = true
    if(podeDirigir) {
        console.log("Ela pode dirigir")
    }

const saldoEmConta = 0
    if(!saldoEmConta)/*Exclamação "!" é para negar o que tem dentro dos (), Se for True vira False e vice-versa.*/
    // Zero é False, mas neguei com Exclamação e nesse caso ele será TRUE
        {
          console.log("não tem saldo!")  
        }
  const bollComString = "ae bichão"
// !! força o valor a true ou false de acordo com a tabela
    console.log("bollComString", !!bollComString) 
    
    // Negação
    console.log("negação", !bollComString)

    // vou usar Negação e forçar ele com o boolean
    console.log(
        'negação + forçar boolen', 
        ! (!!bollComString)
    )   //   Ao usar duas exclamações eu converti para o TIPO BOOLEAN, depois ao usar uma exclamação eu vou pedir para ele inverter o valor dela

    console.log(!true)

        
