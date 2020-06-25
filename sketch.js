function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40)
  //somDoJogo.loop();
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo: jogo,
    telaInicial: telaInicial

  };
  botaoGerenciador = new BotaoGerenciador('Inicias', width/2,height/2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}