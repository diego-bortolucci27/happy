import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602877310646 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
        /*
            O método up vai realizar as alterações no Banco de Dados, como por exemplo:
                -> Criar uma nova tabela;
                -> Criar um campo;
                -> Deletar um campo;
        */
      await queryRunner.createTable(new Table({ //Comando para criar uma tabela no BD
        name: 'orphanages', //Nome da Tabela
        columns: [ //Campo da Tabela - 1º Campo da Tabela, é o Id
          {
            name: 'id', // configuração dela, o nome
            type: 'integer', //Tipo
            unsigned: true, // A coluna não pode ser negativa, somente números positivos
            isPrimary: true, //Tem Chave Primária: True, Verdadeiro, ou Sim
            isGenerated: true, //A coluna será gerada automaticamente
            generationStrategy: 'increment', //Auto Incremento, vai aumentar o ID
          },
          { //Segundo Campo da Tabela, é o Name
            name: 'name',
            type: 'varchar',
          },
          { //Terceiro campo, latitude
            name: 'latitude',
            type: 'decimal',
            scale: 10, //Numeros antes da vírgula
            precision: 2, //Numeros depois da Vírgula
          },
          { //Terceiro campo, longitude
            name: 'longitude',
            type: 'decimal',
            scale: 10, //Numeros antes da vírgula
            precision: 2, //Numeros depois da Vírgula
          },
          { //Quarto Campo, about
            name: 'about',
            type: 'text',
          },
          { //Quinto Campo, instructions
            name: 'instructions',
            type: 'text',
          },
          { //Sexto Campo da Tabela, é o Name
            name: 'opening_hours',
            type: 'varchar',
          },
          { // Sétimo Campo, open_on_weekends
            name: 'open_on_weekends',
            type: 'boolean',
            default: false,
          },
        ]
      }))
    }
  public async down(queryRunner: QueryRunner): Promise<void> {
      // O método Down vai desfazer as alterações do método Up
      await queryRunner.dropTable('orphanages');
    }
}