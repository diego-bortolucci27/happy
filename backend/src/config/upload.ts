// Arquivo para fazer o upload de imagens

import multer from 'multer';
import path from 'path'; //serve para controlar onde que vai e de  onde veio os arquivos com o Node

//

export default{ //Comando para exportar um objeto com várias configurações, basicamente é instanciar ou criar um objeto como no Php POO, com o comando new $objeto = objeto; por exemplo.
    storage: multer.diskStorage({ //Comando para salvar as imagens no disco, que tem suas propiedades
        destination: path.join(__dirname, '..', '..', 'uploads'), //Destino das imagens quando for feito o upload
        filename: (request, file, cb) => { // Função filename, é uma função que recebe a requisição do express, o arquivo e uma função de callback, função que serve para dar um nome para o arquivo. Se dois pessoas colocar o mesmo nome, um vai sobrescrever o outro, por isso se usa essa função.
            const fileName = `${Date.now()}-${file.originalname}`; // Comando que coloca a data no arquivo.
            cb(null, fileName); // Retorna sem erro, com o null e o nome do arquivo com o filename
        },
    })
};