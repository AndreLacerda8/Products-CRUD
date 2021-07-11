# CRUD de Produtos
## Esse é um projeto em que se pode criar, visualizar, editar e deletar produtos.

<p align='center'>
    <a href="#objective">Objetivo</a> ∙
    <a href="#run">Rodar-aplicação</a> ∙
    <a href="#tech">Tecnologias</a>
</p>

<h2 id='objective'>Objetivo</h2>
Esse projeto tem como objetivo ser um CRUD de produtos, ou seja, podemos criar, atualizar, remover e ler produtos dentro da aplicação. <br>
O Back-End foi desenvolvido em node, usando o express, é com uma API para receber requisições e realizar suas funções de CRUD. <br>
Já o Front-End foi desenvolvido em React e com ele fazemos requisições usando o axios, para o Back-End. <br>
Como banco de dados está sendo usado o Cloud Firestore da Google.

<h2 id='run'>Pré-requisitos</h2>

Antes de começar você vai precisar ter o [Node.js](https://nodejs.org/en/) instalado em sua máquina.

### Rodando o Back-End
Clone este repositório; vá para a pasta backend:
``` 
$ cd backend 
```
Instale as dependências:
``` 
$ npm install
```
Execute a aplicação em modo de desenvolvimento
``` 
$ npm start 
```
O servidor iniciará na porta 8080 - acesse <http://localhost:8080>


### Rodando o Front-End
Vá para a pasta frontend:
``` 
$ cd frontend 
```
Instale as dependências:
``` 
$ yarn install 
```
Execute a aplicação em modo de desenvolvimento
``` 
$ yarn start 
```
Ela vai rodar na porta 3000 - acesse <http://localhost:3000>

<h2 id='tech'>Tecnologias</h2>
As ferramentas utilizadas nesse projeto foram:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [React](https://pt-br.reactjs.org/)