import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Test{
    @PrimaryGeneratedColumn()
    id!:number;


    @Column()
    test!:string;


    @Column()
    myTest!:string;
}