class Veiculo{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
    instanceof(){
        return `Veículo: ${this.marca} ${this.modelo}`;
    }
    velocidadeMaxima(){
        return "Velocidade máxima não definida";
    }
}

class Carro extends Veiculo{
    constructor(marca, modelo, portas){
        super(marca, modelo);
        this.portas = portas;
    }
}
instanceof(){}
    }
    velocidadeMaxima(){
        return `Velocidade máxima: ${super.velocidadeMaxima()} Km/h`
    }
}
const meuCarro = new Carro(`Toyota`, `Corolla`,4)
console.log(meuCarro.instanceof())