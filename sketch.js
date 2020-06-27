function setup() {
  createCanvas(windowWidth, windowHeight);
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    telaInicial: telaInicial,
    jogo: jogo
  };
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2);
  frameRate(40)
  somDoJogo.loop();
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}