const pessoa = {
    id: '0011AABBCC',
    nome: "Xuxa da Silva",
    idade: 40,
    dataNascimento: new Date(2000, 6, 1),

} // ID, nome, idade, dataNascimento são chaves. O que vem depois de (:) são valores das chaves

//console.log(pessoa.id)
//console.log(pessoa['nome'])

pessoa['nomeDaMae'] = 'Maria da Silvaa'
//console.log(pessoa['nomeDaMae'])
///////////////////

const heroi = {
    nome: 'Flash',
    idade: 55,
    sexo: 'Masculino'
}
/*
    console.log( "nome:", heroi.nome)
    console.log('idade:', heroi['idade'],'anos')
    console.log('sexo:', heroi.sexo)
    console.log('naoExiste:', heroi.naoExite)
 */   

// Criar nova chave para o Heroi
heroi.id = 001
    //console.log(heroi)

 // Para pegar/saber as chaves de um objeto (Object.Keys())
    //console.log(Object.keys(heroi))   

 // Para pegar/saber os valores das chaves do objeto (Object.values())
    //console.log(Object.values(heroi)) 
    
// Juntar 2 Objetos (Object.assign())
    const celular = {
        numero: 119751,
        marca: "Nokia"
    }
    const novoObj = Object.assign(heroi, celular)
        //console.log(novoObj)
  
 // Remover Chave do Objeto (delete)    
    delete novoObj.numero
    console.log(novoObj)

