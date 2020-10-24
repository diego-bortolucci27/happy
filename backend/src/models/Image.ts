//Arquivo para cadastar as imagens depois de feito o Upload

// Para funcionar esse comando abaixo, é necessário você ir até o arquivo tsconfig.json e marcar o "strictPropertyInitialization": true, como false. Esta na linha 33.

// Também é necessário ir no mesmo arquivo tsconfig.json e habilitar os Experimental Options, que são os "experimentalDecorators": true, "emitDecoratorMetadata": true, que estão na linha 61,62,63 apenas tirando o comentário deles. Isso fará habilitar uma nova API, o Decorator, dentro de nossa aplicação.

import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Orphanage from './Orphanage';

@Entity('images')

export default class Image{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({name: 'orphanage_id'})
    orphanage: Orphanage;
}