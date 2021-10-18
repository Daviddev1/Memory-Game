class Matematica {
    static somar (valor1, valor2) { //USei STATIC para não precisar o This
        return valor1 + valor2
    }

    static multiplicar (valor1, valor2) {
        return valor1 * valor2
    }
}

// DEIXAR O ARQUIVO PUBLICO usando module.exports
module.exports = Matematica

//Criar main para exportar matematica