class Carro {
    nome; //public
    ano; //public
    modelo; //public
    #chassi; //private

    constructor(nome,ano,modelo,chassi) {
        this.nome = nome;
        this.ano = ano;
        this.modelo = modelo;
        this.#chassi = chassi;
    }

    definirChassi(chassi){
        this.#chassi = chassi;
    }

    pegarChassi(){
        
        return this.#chassi;
    }
}

module.exports = Carro;