class Pessoa {
    //Inicializar os meus atributos na minha classe
    constructor (nome,idade,cpf){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    //Um metodo para Definir o nome 
    setNome(nome){
        this.nome = nome;
    }

    pegarNome(){
        return this.nome;
    }
}

//Exportando a classe Pessoa
module.exports = Pessoa;