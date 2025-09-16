//20. Imagine que temos o servidor já construído, mas precisamos criar as rotas de uma aplicação de tickets de chamados.

// A) Construa o roteamento /ticket e implemente as rotas para: listar todos, adicionar,atualizar, remover.


const express = require('express')
const app = express();

app.use(express.json());

let tickets = [];

//Listar todos
app.get("/ticket", (req, res) => {
    res.json(tickets)
});

//Adicionar Ticket
app.post("/ticket", (req, res) => {
    const novoTicket = {
        id:tickets.length + 1,
        ...req.body
    }

    tickets.push(novoTicket);
})

app.put("/ticket/:id", (req,res) => {
    const {id} = req.params

    let ticket = tickets.find(t => t.id === id)

    if(!ticket){
        return res.status(400).json({msg: "Ticket não encontrado, então ele não sera atualizado"})
    }

    ticket = {...ticket, ...req.body}

    tickets = tickets.map(t => (t.id === id ? ticket : t))
    res.json(ticket);
})

app.delete("/ticket/:id", (req,res) => {
    const {id} = req.params;
    tickets = tickets.filter(t=> t.id != id);
    res.json({
        msg:"Ticket atualizado com sucesso"
    })
})



//21. Ainda sobre o endpoint criado na atividade 20, vamos criar um middleware que valide o corpo da requisição POST /ticket.

// Exemplo: No corpo da requisição, no body, estão vindo os campos: título, prioridade, descrição, categoria, nome solicitante, departamento/setor do solicitante, telefone e email do solicitante

function middlewareValidarTicket (req,res,next) {
    const {titulo,prioridade,categoria,nomeSolicitante,deparmaneto,telefone,email} = req.body

    if(!titulo || !prioridade || !categoria || !nomeSolicitante || !deparmaneto || !telefone || !email){
        return res.status (400).json ({msg:"Tem campos obrigatorios vazio"})
    }

    next();

}



module.exports = app;