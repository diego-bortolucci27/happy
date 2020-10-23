import express from 'express';
// Express é um Fremework em Node que ajuda a lidar com as Requisições e com as Respostas. Ele ajuda a criar rotas, etc.

import './database/connection';
import routes from './routes';

const app = express(); // Comando de criação da aplicação, para poder utilizar o Express.

app.use(express.json());
app.use(routes);

app.listen(3333); //Aqui esta comunicando com a porta 3333. E com isso, acessa o localhost:3333

// O Node é um backend JavaScript ou TypeScript, e como os outros backends ele funciona no fluxo de REQUISIÇÃO (Quando o usuário no Front-end faz uma chamada para o Back-end, como um formulário por exemplo) e RESPOSTAS (Após a requisição feita pelo usuário, o Node precisa enviar uma resposta para o usuário).

/*
    Exixtem 3 formas de lidar com Banco de Dados, dentro do Backend:

    1. Driver Nativo = Permite executar as query do Bd direto no Node, porém ele não fornece nenhum tipo de abstração. Ex: sqlite3.query('SELECT * FROM users).

    2. Query Builder = Escreve as Query com JavaScript. Ex: knex('users').select('*').where('name', 'Diego').

    3. ORM (Object Relational Mapping) ou Mapeamento Relacional de Objeto = É o nível de abstração maior possível. É uma classe do Js que simboliza uma tabela do DB, e cada retorno, será uma instância/objeto da classe.
*/