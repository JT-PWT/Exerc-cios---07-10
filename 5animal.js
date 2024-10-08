class Animal {
    som() {
        return "Som de animal";
    }
}

class Cachorro extends Animal {
    som(){
        return "Au au";
    }
}

class Gato extends Animal {
    som(){
        return "Miau miau";
    }
}

const meuCachorro = meuCachorro();
const meuGato = meuGato();

console.log(meuCachorro, meuGato);