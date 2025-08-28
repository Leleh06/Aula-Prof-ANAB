//● Atividade 2
//Contexto: Um professor quer armazenar informações sobre os alunos, como nome e nota. Para proteger esses dados, eles devem ser privados, permitindo acesso apenas por métodos controlados.
//Comando: Crie a classe utilizando os conceitos de encapsulamento para armazenar e recuperar os dados

class Aluno {
    #nome;
    #nota;

    constructor (nome,nota) { 
        this.#nome = nome;
        this.#nota = nota;
    }
    //SET
    nomeAluno(nome){
        this.#nome = nome;
    }

    //SET
    notaAluno(nota){
        this.#nota = nota;
    }

    //GET
    verNome(nome){
        return this.#nome
    }

    verNota(nota){
        return this.#nota
    }
}

const objAluno = new Aluno();
objAluno.nomeAluno("Leticya"); //retorna meu nome 
objAluno.notaAluno("10"); //retorna a nota

// ● Atividade 3
// Contexto: Você precisa criar um sistema que controla carros. Alguns comportamentos, como ligar
// ou frear, devem ser públicos, mas a velocidade do carro deve ser privada e não acessível
// diretamente.

// Comando: Crie uma classe Carro aplicando os conceitos de encapsulamento. O atributo
// velocidade deve ser privado, não podendo ser acessado diretamente. Implemente métodos
// públicos ligar() e frear() para controlar o carro, além de getters e setters que permitam acessar e
// alterar a velocidade de forma segura, incluindo validações quando necessário. Teste a classe
// criando um objeto Carro e chamando seus métodos

class ControlaCarro {
    #velocidade;
    ligar;

    constructor(vel){
        this.#velocidade = vel;
        this.ligar = ligar;
    }

    ligar(){
        this.#velocidade
    };

    frear(){
        this.#velocidade --;
    }

    setVelocidade(){
        if (velocidade > 0) {
              this.#velocidade += velocidade;
        }
      
    }

    getVelocidade(){
        return this.#velocidade;
    }
}

const cc = new ControlaCarro();
cc