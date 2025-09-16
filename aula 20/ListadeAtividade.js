//1. Explique a diferença entre uma API e um endpoint

//R:API é onde guarda todas as informções, onde fica o processamneto da aplicação, ela é um conjunto de regras e definições que permite a comunicação entre sistemas. O endpoint já é o endereço especifico dentro da API que responde a uma funcionalidade

//2. Cite exemplos de quando usar GET, POST, PUT, PATCH e DELETE em uma API.

//R:GET: quando queremos listar todos 
//POST: postar uma foto no sistema, cadastar um usuario 
//PUT: atualizar todos os dados de um usuario
//PATCH: atualizar algum dado especifico 
//DELETE: remove algo, um cadastro, uma informação 

//3. Qual a função dos headers em uma requisição HTTP? Dê dois exemplos.

//R: A função é definir o conteudo da requisição, o headers carrega informações adicionais que ajuda na comunicação entre clientes. EX:content-type, aplication-JSON

//4. Diferencie query params, params de rota e body em uma requisição.

//R:Query params: Dados enviados na URL apos a '?'
//Params de rota: É a parte fixa da rota, sempre depois da '/'
//Body: São dados enviados do corpo da requisição, geramente em posh,put e get.

//5. Explique com suas palavras a importância do Postman no desenvolvimento e testes de APIs.

//R:POSTMAN ajuda nós testar a API antes dela ir para o teste, é como uma caixa de ferramentas para API, ele facilita o teste,validação e documentação de endpoint, permitindo enviar requisições, analisar respostas e simular cenarios reais sem precisar de codigos.

//6. Explique com suas palavras quem é o request (quem faz a requisição) e quem é o response (quem envia a resposta).

//R:Request: ele é o usuario 
//Response: ele é o servidor 

//7. Defina os conceitos de classe e objeto em POO e dê um exemplo fora do contexto de programação

//R: CLASSE: é o esqueleto, molde ou o modelo. EX: classe: (carro)
// OBJETO: é a estancia concreta desse molde, é quando da caracteristica para algo. EX: nome (civic)

//8. Explique a diferença entre atributo e método em uma classe

//R:ATRIBUTO: ele é uma informação, são as caracteristica 
//METODOS: são as funções

//9. O que é o encapsulamento em POO e por que ele é importante?

//R: é para proteger os dados para não ser envadidos, vai precisar de um metodo para acessar tal informação dentro do encapsulamento, ele é o metodo para proteger a classe, ele evita modificações indevidas.

//10. Explique a função dos getters e setters e quando devemos usá-los.

//R: SET: definir, acerta
// GET: ele é pegar

//11. Explique o papel do Express.js quando usamos Node.js + MySQL em um projeto.

//R: o express.js é um framework que facilita a criação de rotas, middlewares e controles de requisições e respostas no BACK_END.

//12. Quais são os benefícios de separar as camadas do back-end em rotas, controladores e modelos?

//R: ele ajuda na manunteção e deixa mais organizado, as rotas organiza os endpoint, os controladores contem a regra de negocio e os modelos representa a comunicação com o banco de dados

//13. O que é um middleware no Express.js?

//R: Ele é tipo uma validação, onde ele fica no meio entre o cliente e servidor, se estiver tudo certo ele envia para o servidor, se não, nem chega perto do servidor.

//14. Por que é importante centralizar o tratamento de erros em uma aplicação?

//R: Ele é importante para padronizar a mensagem, facilitar manuntenção no codigo e melhorar experiencia do usuario com resposta consistente. 

//15. Diferencie o uso de try/catch local e o uso de um middleware de erro global.

//R: TRY/CATH: usado em blocos especifico de codigos 
// middleware de erro global: ele captura erro de toda a aplicaçaõ, garantindo trabalho centralizado

//16. O que é um ORM e por que usá-lo em vez de escrever queries SQL manuais?

//R: ORM Object-Relational Mapping é uma ferramenta que permiti interagir com banco de dados, usando objeto em vez de SQL pura

//17. Cite três vantagens do uso do Sequelize.

//R:facilita a criação e manipulação de tabela sem precisar escrever SQL manual, suporta a migrações de banco, e funciona em varios bancos.

// --------------------------------------------------------------------------------- //







