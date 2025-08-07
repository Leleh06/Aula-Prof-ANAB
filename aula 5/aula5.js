// Funções tradicionais 
// function adicionar(parametros, parametro) {
//     // ...
// }
// function soma(a, b) {
//     return a + b
// }

// function concatenacaoPalavra(a, b) {
//     return a + '-' + b // Ana Moreira
// }

// Funçoes anonimas 
// let saudacao = function () {
//     console.log("Oi pessoal")
// }

// concatenacaoPalavra("Vitor", "Moreira");
// saudacao();

// Arrow functions
// let saudacao = function () {
//     console.log("Oi pessoal")
// }

// const saudacao1 = () => {
//     console.log("Oi pessoal")
// }

// function soma(a, b) {
//     return a + b
// }

// é equivalente a essa função arrow function
// const somar = (a, b) => a + b;

// Diferença do This entre arrow functions e funções tradicionais
// Arrow function MÃO POSSO UTILIZAR O THIS
// FUNÇÃO NORMAL POSSO UTILIZAR O THIS
// const obj = {
//     nome : "Leticya",
//     idade : 15,
//     saudacao: () => {
//         console.log ("Oi" + this.nome) // erro
//         //Equivalente a
//         console.log("Oi" + obj.nome)
//     }
// }

// // Função callback

// function executar (funcaoCallback) {
//     console.log ("Antes");
//     funcaoCallback();
//     console.log("Depois");
// }

// executar(()=>console.log("Executando!!!"))

//Resultado do codigo 
//Antes
//Executando
//Depois

//Função sincrona

// function sincrona () {
//     console.log ("Vai execultar essa linha primeiro")
//     console.log ("Depois essa linha")
//     console.log ("E depois essa linha")
// }

// sincrona();

// function teste () {
//     console.log("a")
//     setTimeout(() => {
//         console.log("b");
//     }, 2000);
//     console.log("c";)
// }

// teste()

//Funções que retorna OUTRA FUNÇÃO

//Função1
// function funcao1 (nome) {
//     //Função2
//     return function (mensagem) {
//         console.log(`${mensagem}, ${nome}`);
//     }
// }

// const msgParaLuzia = funcao1("Luzia"); //função 1
// msgParaLuzia("Fala comigo"); //função 2

// function funcao1 (nome, mensagem) {
//     return console.log(`${mensagem}, ${nome}`);
// }

//Função assincronas
// function esperar () {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('Demorou, mas chegou :D');
//         }, 5000)
//     })
// }

// //Toda vez que eu fizer uma função assicrona 
// //eu preciso utilizar await
// async function executar () {
//     console.log('Esperando...')
//     const resultado = await esperar (); //ESPERA A PROMISE FONALIZAR COM SUCESSO OU FALHA
//     console.log(resultado);
// }

// execultar();

//RESULTADO DESSE CODIGO
// Esperando...
// depois de 5 segundos...................
// Demorou, mas chegou :D

let carro = {
    nome: "Honda Civic da Leticya",
    marca:"Honda",
    modelo:"Civic",
    ano:2025,
    atributos: ["som", "camera de ré", "teto solar", "escapamento", "antena"]
}

console.log(carro.ano); //2025
console.log(carro.atributo[2]); //teto solar 

//Adicionar
carro.cor = "Preto com vermelho";

//Alterar 
carro.nome = "Honda Civic 2025";