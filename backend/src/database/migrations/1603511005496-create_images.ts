import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1603511005496 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({ //Comando que cria uma nova table
            name: 'images', //Nome da tabela
            columns: [ //Campos da tabela
                {
                    name: 'id', // configuração dela, o nome
                    type: 'integer', //Tipo
                    unsigned: true, // A coluna não pode ser negativa, somente números positivos
                    isPrimary: true, //Tem Chave Primária: True, Verdadeiro, ou Sim
                    isGenerated: true, //A coluna será gerada automaticamente
                    generationStrategy: 'increment', //Auto Incremento, vai aumentar o ID
                },
                {
                    name: 'path', //Caminho onde vai esta salvo a imagem
                    type: 'varchar',
                },
                {
                    name: 'orphanage_id', //Id do orfanato
                    type: 'integer',
                },
            ],
            foreignKeys: [ //Chaves estrangeiras
                {
                    name: 'ImageOrphanage', //Nome da FK
                    columnNames: ['orphanage_id'], //Nome da coluna/campo que vai armazenar
                    referencedTableName: 'orphanages', // Com qual coluna/campo que vai armazenar o relacionamento 
                    referencedColumnNames: ['id'], 
                    onUpdate: 'CASCADE', // Caso não encontre o id, ele alterá o id e consegue mudar a imagem
                    onDelete: 'CASCADE', // Caso não encontre o id, ele alterá o id e consegue deletar a imagem
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
