// Importando o arquivo da classe
// import Carro from "./Carro.js";

// const objCarro = new Carro();
// objCarro.nome = "Prisma";
// let nome = objCarro.nome;
// console.log("O nome é: ", nome);

// const objCarro2 = new Carro();//instanciando minha classe
// objCarro2.definirChassi("123ABC!@#"); //definindo o nome do meu chassi
// let chassi = objCarro2.pegarChassi(); //aqui estou capturando o nome do meu chassi
// console.log("O chassi é: " +chassi); //mostra o nome chassi

import ContaBancaria from "./ContaBancaria.js";

let saldoInicial = 100000 //meu saldo bancario
const contaBancaria = new ContaBancaria(saldoInicial); //instanciando minha classe 

//depositando 20mil reais na minha conta
contaBancaria.depositar(20000);

let extrato = contaBancaria.getExtrato();
console.log("Meu saldo é: ", extrato);

//retirando 5000 mil reais da minha conta
contaBancaria.sacar(5000);
console.log("Meu saldo final é: ", contaBancaria.getExtrato())

//115 mil reais DE RESTO NA CONSTA