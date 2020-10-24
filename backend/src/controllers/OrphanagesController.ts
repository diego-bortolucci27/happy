import {Request, Response} from 'express';
import {getRepository} from 'typeorm'; //Serve para criar, deletar, no banco de dados
import Orphanage from '../models/Orphanage';  //Importação da classe Orphanage
import orphanages_view from '../views/orphanages_view';
import orphanageView from '../views/orphanages_view';
import * as Yup from 'yup';

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


export default{ //Comando para exportar um objeto com várias configurações, basicamente é instanciar ou criar um objeto como no Php POO, com o comando new $objeto = objeto; por exemplo.
    async index(request: Request, response: Response){
        const orphanagesRepository = getRepository(Orphanage);

        const orphanages = await orphanagesRepository.find({
            relations: ['images'] // Propiedade para ter relação com Images
        });

        return response.json(orphanages_view.renderMany(orphanages));
    },

    async show(request: Request, response: Response){
        const {id} = request.params;

        const orphanagesRepository = getRepository(Orphanage);

        const orphanage = await orphanagesRepository.findOneOrFail(id,{
            relations: ['images']
        }); // findOneOrFail, ele tenta encontrar um orfanto com o id informado, senão encontrar, ele irá dar um erro.

        return response.json(orphanages_view.render(orphanage));
    },

    async create(request: Request, response: Response){
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

        const requestImages = request.files as Express.Multer.File[];

        const images = requestImages.map(image => {
            return { path: image.filename }
        })

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        };

        const schema = Yup.object().shape({
            name: Yup.string().required('Nome obrigatório'),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            iamges: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required()
                })
            ),
        });

        await schema.validate(data,{
            abortEarly: false,
        });

        const orphanage = orphanagesRepository.create(data);
    
        await orphanagesRepository.save(orphanage);
    
        return response.status(201).json(orphanage); //Este comando é o retorna da função, ou seja a resposta que o Node vai dar ao cliente/usuário, então usa-se o return response ou (retorne a resposta), utilizando o json, e o json ele vai retornar a resposta em objeto, então fica ({message: 'Hello World'}).
    }
};