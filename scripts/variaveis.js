let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;
let imagemTelaInicial;
let imagemVida;
let fonteTelaInicial;
let somDoPulo
let jogo;

let cenaAtual = 'jogo';
let cenas;
let botaoGerenciador;
let vida;
let fita;

let cenario;
let somDoJogo
let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;
let telaInicial;
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