const cep = `88058-210`;

//Fecth API - Nativo Javascript
fetch(`https://viacep.com.br/ws/${ cep}/json/`)
.then(res => res.json()) //conerte para objetos
.then(data => console.log(data)) //recebe dados convertidos e mostra dados
.catch(err => console.log(err)) //se der erro,captura e mostra erro

//################################################################################################

//Função quw ler dados do arquivo 
function lerDados (arquivo = "usuarios.json") {
    //retorna os dados CONVERTIDOS PARA OBJETO
    return JSON.parse(fs.readFile(arquivo, 'utf-8')) //
}

//Salva os dados no arquivo 
function salvarDados(arquivo="usuarios.json",dados) {
    // USA A FUNÇÃO DE ESCREVER NO ARQUIVO, PASSANDO COMO PARAMETROS O ARQUIVO E UM METODO QUE CONVERTE O OBJETO PARA JSON
    fs.writeFile(arquivo, JSON.stringify(dados,null,2))
}

//CRIAR NOSSO SERVIDOR COM NODE

const http= require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    //Define o conteudo da resposta 
   res.setHeader("Content-type", "application/json");

   if(req.method === "GET" && req.url === '/dados'){
    const dados = lerDados('usuarios.json'); //retorna os dados do json
    res.writeHead(200);
    res.end(JSON.stringify(dados));
   }else if (res.method === "POST" && req.url === "/dados"){
    let body = '';

    //É um evento que escuta quando os dados chegam
    req.on('data',chunk => {
        body += chunk.toString();
    })

    req.on('end', ()=> {
        try{ //Tudo que der certo ele entra aqui
            const novoDado = JSON.parse(body)

            //Lê o json existente
            const dados = lerDados('usuario.json');

            //Gera o ID
            novoDado.id = 99,

            //Adiciona o novo dados no json
            dados.push(novoDado);

            //Chama função salvar dados
            salvarDados('usuarios.json', dados);

            res.writeHead(201); //Responde ao cliente com status 201 (criado com sucesso)
            res.end("Dados adicionados com sucesso.")

        }catch(error) { //Se der errado, entra aqui
            console.log("Ocorreu um erro: ", error);
            res.writeHead(400)
        }
    })
   } else {
    res.writeHead(404);
    res.end("Pagina não existe.")
   }
});

server.listen(port, () => { //Servidor irá rodar na porta definida 
    console.log(`Servidor rodando na porta ${port}`);
});



