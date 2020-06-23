let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let somDoPulo
let cenario;
let somDoJogo
let personagem;
let inimigo;

const matrizInimigo = [[]];
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 4; j++) {
    matrizInimigo.push([j * 104, i * 104])
    // console.log(j * 104, i * 104);


  }

}

const matrizPersonagem = [[]];
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    matrizPersonagem.push([j * 220, i * 270])
    // console.log(j * 220, i * 270);

  }
}

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo =
    loadImage('imagens/inimigos/gotinha.png')
  somDoJogo =
    loadSound('sons/trilha_jogo.mp3');
  somDoPulo =
    loadSound('sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 110, 135, 220, 270);
  inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 52, 52, 104, 104);
  frameRate(30)
  somDoJogo.loop();
}

function keyPressed() {
  if (key === 'ArrowUp') {
    personagem.pula()
    somDoPulo.play()
  }
}

function draw() {
  cenario.exibe();
  cenario.move();

  personagem.exibe();
  personagem.aplicaGravidade();

  inimigo.exibe();
  inimigo.move();

  if (personagem.estaColidindo(inimigo)) {
    console.log('Colidiu')
    noLoop()
  }

}