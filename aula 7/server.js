const http = require("http"); //modulo interno do node 
const port = 3000; //porta onde o node/servidor irá rolar 

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/plain"}); //defino o cabeçalho
    res.write("Olá, servidor em Nodejs está funcionando. :D"); //Corpo
    res.end(); //Finalizar
});

server.listen(port, () => { //Servidor irá rodar na porta definida 
    console.log(`Servidor rodando na porta ${port}`);
});

 const fs = require("fs"); //importante modulo interno do node chamado File System

//Lendo arquivos
/*fs.readFile('dados.txt', 'utf-8', (err, data) => { //chamando o metodo para ler meu arquivo
    if(err) //Se der erro, vai aparecer no console
        console.log('Erro:', err);

    console.log(data); //nessa linha irá mostrar os dados do meu arquivo "dados.txt"
});*/

// fs.writeFile('dados.txt', 'Olá pessoal!!!', (erro) => {
//     if(erro)
//         console.log("Houve um erro: " + erro)

//     console.log('Arquivos salvo com sucesso');
// })

//Acrescentar dados no arquivo
fs.appendFile("dados.txt", "Linha acrescentada!!! Acaba logoooo", (err) => {
    if(err)
        console.log('Erro: ', err);

    console.log("Linha adiconada com sucesso")
})