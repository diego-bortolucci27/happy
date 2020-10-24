// Para funcionar esse comando abaixo, é necessário você ir até o arquivo tsconfig.json e marcar o "strictPropertyInitialization": true, como false. Esta na linha 33.

// Também é necessário ir no mesmo arquivo tsconfig.json e habilitar os Experimental Options, que são os "experimentalDecorators": true, "emitDecoratorMetadata": true, que estão na linha 61,62,63 apenas tirando o comentário deles. Isso fará habilitar uma nova API, o Decorator, dentro de nossa aplicação.

import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Image from './Image';

@Entity('orphanages')

export default class Orphanage{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'orphanage_id'})
    images: Image[];
}