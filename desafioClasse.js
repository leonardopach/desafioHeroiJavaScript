class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo
    }

    classeHeroi() {
        switch (this.tipo) {
            case 'mago':
                return 'usou magia';
            case 'guerreiro':
                return 'usou espada';
            case 'monge':
                return 'usou artes marciais';
            case 'ninja':
                return 'usou shuriken';
            default:
                return 'arma desconhecida';
        }
    }

    atacar() {
        return `${this.nome}, o ${this.tipo}, atacou e ${this.classeHeroi()}.`;
    }
}

const heroi1 = new Heroi("Herói 1", 30, "mago");
console.log(heroi1.atacar());

const heroi2 = new Heroi("Herói 2", 25, "guerreiro");
console.log(heroi2.atacar());

const heroi3 = new Heroi("Herói 3", 30, "monge");
console.log(heroi3.atacar());

const heroi4 = new Heroi("Herói 4", 25, "ninja");
console.log(heroi4.atacar());

const heroi5 = new Heroi("Herói 5", 25, "Samurai");
console.log(heroi5.atacar());