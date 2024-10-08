//*Crie uma classe chamada Carro com os seguintes atributos: marca, modelo e ano. A classe deve ter um método chamado exibirDetalhes que retorne uma string com as informações do carro.*//

class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes() {
        return `Marca: ${this.marca},Modelo: ${this.modelo} e Ano: ${this.ano}`;
    }
}

// Exemplo de uso
const meuCarro = new Carro("Toyota", "Corolla", 2020);
console.log(meuCarro.exibirDetalhes());