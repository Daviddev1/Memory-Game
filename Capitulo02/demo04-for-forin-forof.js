// FOR é muito usado para manipular Listas

const textoPar = 'par'
const textoImpar = "impar"

//for (let index = 0; index <= 10; index++) {
//    const decisao = index % 2 === 0 ? textoPar : textoImpar 
//        console.log(`O número ${index} é ${decisao}`)
//}
///////////////////////////////////////////////////
// Criar uma lista de objetos e passar informações para ele
/*
const lista = [
    {
        id: parseInt(Math.random() * 10), // cria numero randomico. Usar parseInt para trazer somente numero interiro, sem casa decimal
        nome: 'James',
        SuperPoder: 'Velocidade'

    }
]
    console.log(lista)
*/    
/////////////////////////////////////////

const lista = [
    {
        id: parseInt(Math.random() * 10), // cria numero randomico. Usar parseInt para trazer somente numero interiro, sem casa decimal
        nome: 'James',
        SuperPoder: 'Velocidade'

    },
    {
        id: parseInt(Math.random()*3),
        nome: "Mary",
        SuperPoder: 'Força'
    }
]
for(let index = 0; index < lista.length; index ++) {  //LENGHT traz a qntdade de itens que tem na minha lista
        // Significa que ele vai interar a cada item da lista a partir do index
   const item = lista[index] // para pegar um item especifico da ista
   console.log( 
       `
       id: ${item.id}
       nome: ${item.nome}
       `
   ) 
}
////////////////////////////////////////////////
// Não precisa de um contador
// FOR IN
for(const index in lista){
    const item = lista[index] // para pegar um item especifico
    console.log(`Nome`, item.nome)
}
///////////////////////////////////
// Não precisa usar o INdex
// For Of
for(const item of lista) { // com o OF ela vai pegar o item especifico
    console.log('Nome**', item.nome)
}
///////////////////////////////////////////////////
/* RESUMO
    Deve-se entender o que realmente vc precisa para usar os For´s
    se vc nao precisa do indice, vc pode olhar para o item especifico usando o OF
    se precisa do indice e do contador para fazer algum calculo especifico pode usar a primeira forma que é so com o FOR
*/