/*
// Importar o modulo fire sistem que é o reponsavel por ler arquivos e trabalhas com coisas do sistema operacional

const fs = require('fs')
// usar readFile para ler o arquivo
fs.readFile('./arq1.txt', (error, resposta)=> {
    if(error) {
        console.error('Deu merda***', error.stack)
        return; // se ele achar o arquivo no sistema está OK, caso contrario vai dar erro
    }

    console.log('resposta', resposta)
    // qundo eu executar o terminal ele vai me retornar um buffer que é um arquivo binario
    // ele só será um texto qndo eu converter com toString
    console.log('resposta', resposta.toString())
})
*/

const fs = require('fs')

fs.readFile('./arq1.txt', (errorArq1, respostaArq1)=> {
    if(errorArq1) {
        console.error('Deu ruim no arq1', errorArq1)
        return;
    }
    fs.readFile('./arq2.txt', (errorArq2, respostaArq2)=>{
        if(errorArq2) {
            console.error('Deu ruim no arq2', errorArq2)
            return;
            // Deu erro ENOENT que é nome de arquivo errado
        }

        fs.readFile('./arq3.txt', (errorArq3, respostaArq3)=> {
            if(errorArq3) {
                console.error('Deu ruim no arq3', errorArq3)
                return;
            }

            const conteudo= `${respostaArq1}\n${respostaArq2}\n${respostaArq3}`
            // Ao usar crase ele converte automaticamente para ToString
            // Usar \n para quebrar uma linha em cada arquivo q tiver
            console.log(conteudo)

            // Agora quero escrever um novo arquivo 
            //Utilizar .writeFile
            fs.writeFile('./final.txt', conteudo, (errorWrite, respostaWrite) => {
                if(errorWrite) {
                    console.error('Deu ruim no texto', errorWrite)
                    return;
                }
                console.log('Arquivo salvo com sucesso!!!')
            } )




        } )
    })    
})

