import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Reset{
    @PrimaryGeneratedColumn()
    id!:number;


    @Column({
        nullable: true
    })
    email!:string;


    @Column({
        unique:true
    })
    token!:string;
}