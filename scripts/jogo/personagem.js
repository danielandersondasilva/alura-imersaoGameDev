class Personagem {
    constructor(imagem) {
        this.imagem = imagem;
        this.matriz = [[]];
        this.matriz.pop();

        for (let i = 0; i < 4; i++) {
            for (let index = 0; index < 4; index++) {
                this.matriz.push([index * 220, i * 270])

            }
        }
        this.frameAtual = 0
    }

    exibe() {
        image(this.imagem, 0, height - 135, 110, 135,
            this.matriz[this.frameAtual][0],
            this.matriz[this.frameAtual][1], 220, 270)
        this.anima()
    }

    anima() {
        this.frameAtual++
        if (this.frameAtual >= this.matriz.length - 1) {
            this.frameAtual = 0;
        }
    }
}