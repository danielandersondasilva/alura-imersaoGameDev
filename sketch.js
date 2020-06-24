let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;
let somDoPulo
let cenario;
let somDoJogo
let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;
let pontuacao;

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
const matrizInimigoGrande = [[]];
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 5; j++) {
    matrizInimigoGrande.push([j * 400, i * 400])
    // console.log(j * 400, i * 400);
    if (j === 2 && i === 5) {
      break;
    }

  }
}
const matrizInimigoVoador = [[]];
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 3; j++) {
    matrizInimigoVoador.push([j * 200, i * 150])
    // console.log(j * 200,j, i * 150,i);
    if (j === 0 && i === 5) {
      break;
    }

  }
}

const inimigos = [];

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png')
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png')
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png')
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  pontuacao = new Pontuacao();
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
  const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 2500);
  const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width - 52, 0, 200, 200, 400, 400, 10, 500);
  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 400, 100, 75, 200, 150, 100, 3000);

  inimigos.push(inimigo);
  inimigos.push(inimigoGrande);
  inimigos.push(inimigoVoador);

  frameRate(40)
  //somDoJogo.loop();
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

  pontuacao.exibe();
  pontuacao.adicionarPonto();

  personagem.exibe();
  personagem.aplicaGravidade();

  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();
    if (personagem.estaColidindo(inimigo)) {
      image(imagemGameOver, width/2 - 200, height/2)
      console.log('Colidiu')
      noLoop()
    }

  })
}