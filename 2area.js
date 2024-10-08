//Crie uma classe Retangulo com os atributos largura e altura. Adicione um
//método calcularArea que retorne a área do retângulo.

class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
        return this.largura * this.altura;
    }
}

// Exemplo de uso
const meuRetangulo = new Retangulo(5, 10);
console.log(`Área do retângulo: ${meuRetangulo.calcularArea()}`);