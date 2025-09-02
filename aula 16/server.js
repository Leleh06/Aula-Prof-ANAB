// Arquivo de configuração do servidor 

const express = require('express'); //importando um modulo externo para meu projeto
const app = express();
const port = 3000;
const usuarioRoute = require('./BACK-END/src/routes/usuarios');

app.use(express.json()); //permite que o servidor leia os dados em JSON enviados pelo corpo da requisição

//Chamando nossa ROTA GET de usuarios
app.use('/usuarios', usuarioRoute);

//Rota principal GET => localhost:3000
app.get('/', (req, res) => {
    res.send("Olá pessoal,estou no navegador");
});

//iniciar navegador
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}. Abra http://localhost:${port}`);
})