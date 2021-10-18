/*
// enquanto não mudar, não para!
// Muito usado para fazer contagem ou fazer verificações e só sair qndo chegar na resposta que eu quero

let termoDeParada = true // vai ficar rodando até o termo de parada for true
let contador = 0
while(termoDeParada) {
    termoDeParada = contador < 10 // o termo de parada será no 10, é momento que ele fica FALSE e para de rodar

  if (contador % 2 === 0) { // (% 2 === 0) isso significa que ele é numero para
      console.log('Numero par', contador)
  }
  contador += 1 // (contador = contador + 1)é o contador que recebe ele mais o numero 1, pode fazer isso com todos os operadores(+,-,*,/)
}
// o Do roda a primeira vez e testa a variavel depois! primeiro ele roda e depois testa a condição de parada
do {
    console.log('só uma vez! pois termoDeParada é', termoDeParada) // nesse momento o termo de parada já é False, pq lá no primeiro while ele fez a contagem e chegou aqui como FALSE

} while (termoDeParada)

// tem que tomar cuidado para falar qndo o while tem que parar, senao ele fica rodando para sempre
*/
/* Exercicio
let termoParada = true

while(termoParada) {

console.log('Olá Mundo!')

break

}
*/
/* Exercicio
let termoParada = true

let contador = 0

while(termoParada) {

console.log(contador)

if(contador++ < 3)

continue

else

termoParada = false

}
*/

/* Exercicio
const listaDeTarefas = [

    { tarefa: 'lavar o chão', id: 1},
    
    { tarefa: 'lavar a louça', id: 2},
    
    { tarefa: 'arrumar o quarto', id: 3},
    
    ]
    let indice = 0
while(indice < listaDeTarefas.length) {

console.log(listaDeTarefas[indice].tarefa)

indice++

}
*/
 e


let indice = 0

do {

console.log(listaDeTarefas[indice].tarefa)

indice++

} 

while(indice < listaDeTarefas.length)
