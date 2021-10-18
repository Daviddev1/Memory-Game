window.onload = () => { // qndo o browser for carregado ele vai chamar a função
  console.log('tela carregou!!')
  // Agora vamos pegar o clique do botão
  const btn = document.getElementById('btnCalcular')
  btn.onclick = click 
  function obterValorInput(id) {
    const item= document.getElementById(id)
    return item.value
  }
  function click() {
      const tipoOperacao = obterValorInput('tipoOperacao')
      const valor1 = Number( obterValorInput('valor1'))
      const valor2 = Number( obterValorInput('valor2'))
      const resultado = Matematica[tipoOperacao] (
          valor1, valor2) // nao preciso converter para tipo NUmber pq já fiz isso no HTML 
          console.log('resultado', resultado)
          document.getElementById('resultado')
          .innerText = `
          A operação de ${tipoOperacao}, ${valor1} por ${valor2} é ${resultado}
          `
    
    }
    /*toda vez q rolar um clique ele vai chamar essa função clicou!*/
}