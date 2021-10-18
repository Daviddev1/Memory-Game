function onLoad() {
    const dependencias = { 
        tela: Tela, // a classe Tela é global
        
    }
    // Inicializamos o jogo da memoria
    const jogoDaMemoria = new JogoDaMemoria(dependencias)
    jogoDaMemoria.inicializar()
  
}
window.onload = onLoad
