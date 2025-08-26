//Importando o arquivo de classe Pessoa
import Pessoa from "./class/Pessoa.js"

const pessoa1 = new Pessoa("Leticya", 19, "54245620862"); //a constante pessoa1 é um objeto

pessoa1.setNome("Heloisa Piancó"); //definindo o nome 

let nomePessoa = pessoa1.pegarNome(); //Declarei uma variável chamada nomePessoa que está recebendo o nome que eu defini

console.log(nomePessoa); //mostra no console o nome