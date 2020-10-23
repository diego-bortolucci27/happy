import {Router} from 'express';
import {getRepository} from 'typeorm'; //Serve para criar, deletar, no banco de dados
import Orphanage from './models/Orphanage';  //Importação da classe Orphanage

const routes = Router();

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
routes.post('/orphanages', async (request, response) => {
    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);
    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
    });

    await orphanagesRepository.save(orphanage);

    return response.status(201).json(orphanage); //Este comando é o retorna da função, ou seja a resposta que o Node vai dar ao cliente/usuário, então usa-se o return response ou (retorne a resposta), utilizando o json, e o json ele vai retornar a resposta em objeto, então fica ({message: 'Hello World'}).
}); 
//Função - 1º Parâmetro = Indicar a rota(ex: '/users'). 2º Parâmetro, o que você quer q faça (ex: console.log('hello world')). Tem que colocar o Request e o Response, que é a Requisição e a Resposta. Na requisição, você pode buscar todos os dados. Response é como o backend vai retorna uma resposta.

export default routes;