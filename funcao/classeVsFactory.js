class Pessoa {
    constructor (nome){
        this.nome = nome
    }

    falar() {
        console.log(`Meu Nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Gean')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Gean')
p2.falar()