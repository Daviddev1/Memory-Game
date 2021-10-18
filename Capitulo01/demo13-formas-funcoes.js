// varias formas de declarar funçoes

function minhaFuncao1(parametro1) {
    return `aeeee`
}
console.log(minhaFuncao1)

const minhaFuncao2 = function(parametro1) {
    return `aeee ${parametro1}`
}
console.log(minhaFuncao1)

const minhaFuncao3 = (parametro1) => {
    return `aee ${parametro1}`
} // coloco (=>) para falar que é uma função

console.log(minhaFuncao3)

// Se vc tem somente 1 parametro  vc nem precisa do parenteses, vc pode colocar tudo dentro de uma linha, isso vale tanto para os parametros qnto para os codigos que existe dentro da funçao

const minhaFuncao4 = parametro1 => `aee ${parametro1}`// aqui ele é somente uma linha, logo nao preciso da palavra return e nem das chaves.
    console.log(minhaFuncao4)

const obj1 = {
    minhaFuncao: parametro1 => `aee ${parametro1}`
}
    console.log(obj1) 

obj1.minhaFuncao('test')
 console.log(obj1)

    // Todas as funçoes acima vc chama ela da mesma forma: é o nome da função e dentro dela vc passa os argumentos/Parametros

const obj2 = {
    minhaFuncao (parametro1) {
        return `aee ${parametro1}`
    }
}
 console.log(obj2)

 obj2.minhaFuncao() //Passei o parametro. Usei a função.
    console.log(obj2) 
    
