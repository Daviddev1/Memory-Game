// Switch indicado para fazer menu de seleção
// Switch = trocar
// é uma estrutura de decisão
// serve para redirecionar uma açao de acordo com o caso

//REQUIRE serve para pegar uma classe que já existe no Node, que serve para capturar os eventos ou o que o cliente está digitando

// em seguida vamos inicializar o terminal

// CREATEINTERFACE serve pra poder manipular o que acontence qndo um cliente interagir

const readLine = require('readline')
const terminal = readLine.createInterface({
    //Definir o modo de entrada via terminal => tudo oq entrar na minha aplicação será via terminal
   input: process.stdin,
    
    // todo texto de saida sairá no terminal
    // tudo que for saida, sairá do meu terminal, ele terá q mostrar um console.log pra mim.
   
   output: process.stdout    
})

// SImular o menu (texto do menu)
const textoMenu = `
Olá, seja bem vindo
Digite 1 para acessar o menu inicial
Digite 2 para acessar o menu de Herois
Digite 3 para acessar o menu de Vilões
Digite 0 para sair
`
/*

console.log('textoMenu', textoMenu)
// o Terminal ficou parado, pq ele nao sabe qndo ele tem que parar de questionar o cliente, Logo deve dar CTRL+C para parar a execução

const opcao = 2 // aqui vou falar q ele digitou a opção 1 ou 2
 // No swich case nós definimos o CASE e qual é o valor que espero
   switch(opcao) {
       case 1: 
           console.log('pressionou 1')
           break; // Break serve para parar a execução
        
        case 2:    
            console.log('pressionou 2')
            break;
        default: // Caso ele o cliente aperte algum botão que não conheço
            console.log ('opção inválida')
            break

   }

*/
////////////////////////////////////////////////
// Aqui será feito o Wizard=> que são varias questoes no terminal para perguntar ao usuario algumas informações para tormar decisoes

/*
terminal.question('Qual é o seu nome?', (msg) =>{
    console.log('você escreveu', msg) //qndo o cliente apertar Enter ele chamará uma função
    terminal.close() // para liberar o terminal e nao apertar mais nada.

})
*/
////////////////////////////////////////////////////////////
 
/*
// USar OBJETOS para a forma ficar mais inteligente 
 // Vou criar todo o Menu dentro do objeto

 const questoes = {
     menuInicial: {
         texto: textoMenu,//esta é a constante que fiz la em cima, aquele texto grande.
         fn: menuInicial // fn para passar uma função que vai executar qndo alguem responder esse objeto

     }
 }
 function menuInicial(msg) {
     console.log('Acionando o menu inicial!', msg)
 }
 terminal.question(
     questoes.menuInicial.texto, //passo texto e em seguida passo a função 
     questoes.menuInicial.fn // passo a função
 )
 */

 ////////////////////////////////////////////
 // Agora vamos pegar a OPÇAO 
 // a opçao tem q ser numerica

 const questoes = {
    menuInicial: {
        texto: textoMenu,//esta é a constante que fiz la em cima, aquele texto grande.
        fn: menuInicial // fn para passar uma função que vai executar qndo alguem responder esse objeto

    },
    opcao1: {
        texto: 'submenu! Pressione Enter para selecionar mais opcoes...',
        fn: opcao1
    }
}
function opcao1(msg){
    console.log('Não ha mais opcoes!')
    terminal.close()

}
function menuInicial(msg) {
    const opcao = Number(msg) // coverter para numero
    if(isNaN(opcao)) {
        throw new Error('Não é um numero') // qndo o cliente executar algo incorreto o programa vai travar e vai dar erro. Avisando ele para executar a forma correta dentro do que planejei

    }
    switch(opcao) {
        case 0: 
            console.log('Saindo...')
            terminal.close()
            break;
        case 1: 
            console.log('menu inicial')
            terminal.question(
                questoes.opcao1.texto,
                questoes.opcao1.fn
            )
            break;
          default: // default = Se não do ELSE
                console.log('opcao invalida!')
                terminal.close()
                break;

        }

}
terminal.question(
    questoes.menuInicial.texto, //passo texto e em seguida passo a função 
    questoes.menuInicial.fn // passo a função
)


