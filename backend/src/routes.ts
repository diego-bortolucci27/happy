import {Router} from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

/*
    O Comando abaixo é uma ROTA: que é basicamente onde vc passa o endereço ('/users'), você faz alguma coisa, que no caso é printar na tela Hello World.
    Recurso = users
    Métodos HTTP = GET, POST, PUT, DELETE.
        GET = Buscar uma informação (Lista, item).
        POST = Criar uma informação nova.
        PUT = Editar uma Informação.
        DELETE = Deletar uma informação.

    Parâmetros: Existem 3 tipos principais de parâmetros dentro de uma aplicação:

        Query: Serve para realizar uma busca dentro da nossa aplicação, utiliza o sinal de Interrogação (?) para isso, como no ex: http://localhost:3333/users?search=diego&page=2

        Route: Serve para identificar um recurso, como o id, por ex: http://localhost:3333/users/1

        Body: Serve para enviar dados, principalmente do Formulário(como, senha, email, nome, etc), ou seja um monte de dados, mais complexas.
*/

/*
    MVC - Model View Controller
        Model => Representação de uma tabela no Banco. É a representação de uma entidade;
        View => É como as coisas são visualizadas, é como fica disponível para o Front-End;
        Controller => é onde vai ficar as lógicas das rotas;
*/

// Métodos do Controller: Index, show, create, update, delete.

routes.get('/orphanages', OrphanagesController.index); // Index é para listagem
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create); // Cadastro, e o upload.array('images') é para cadastrar uma imagem

//Função - 1º Parâmetro = Indicar a rota(ex: '/users'). 2º Parâmetro, o que você quer q faça (ex: console.log('hello world')). Tem que colocar o Request e o Response, que é a Requisição e a Resposta. Na requisição, você pode buscar todos os dados. Response é como o backend vai retorna uma resposta.

export default routes;