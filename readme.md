

 API REST DESENVOLVIDA COM NODEJS ## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Bibliotecas Aplicadas](#bibliotecas-aplicadas)
- [Arquitetura MVC](#MVC)
- [Rotas](#rotas) 
- [Instruções para testar rotas ](#instruções-para-rotas)
- [Portas](#portas)


## 🛠️ Tecnologias utilizadas no projeto

<br>

Para a construção do projeto, as seguintes tecnologias foram utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoCompass](https://www.mongodb.com/pt-br/products/compass)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
 

### Bibliotecas 

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)


<br>

## 📁 Arquitetura MVC 

```
 📁 Projeto-Desafio
   |
   |-  📁 src
   |    |
   |    |- 📁 controller
   |         |- 📑 cadastroController.js
              |- 📑 contaController.js
   |     
   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |
   |
   |    |- 📁 models
   |         |- 📑 cadastroSchema.js
   |          - 📑 contaSchema.js
   |         
   |
   |    |- 📁 routes
   |         |- 📑 cadastroRoutes.js 
             |- 📑 contaRoutes.js 
   |
   |    |- 📑 app.js

      {} swagger.json
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 README.md
   |- 📑 server.js
```
<br>

## 🔃 Rotas

* local: http://localhost:7238



    * Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente.

<br>

<br>


## 🔃 INSTRUÇÕES PARA MANIPULAÇÃO  DAS ROTAS DE CADASTRO.

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| POST         | /registro/criar         | Cadastra uma nova conta              |
| GET          | /registro/usuario       | Retorna todos os dados cadastrados   |
| PATCH        | /registro/:id           | Altera informações por id            |


## 🔃 INSTRUÇÕES PARA MANIPULAÇÃO  DAS ROTAS DE CONTA.

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | /conta/saldo            | Retorna saldo                        |
| POST         | /conta/deposito         | Faz um novo depósito                 |
| PATCH        | /conta/:id              | Atualiza saldo    |


