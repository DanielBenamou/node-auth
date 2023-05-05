import {Column, Entity ,PrimaryGeneratedColumn} from "typeorm";
//Its goal is to always support the latest
// JavaScript features and provide additional
// features that help you to develop any kind
// of application that uses databases -
// from small applications with a few tables
// to large scale enterprise applications with multiple databases.
@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    first_name!:string;
    @Column()
    last_name!:string;
    @Column()
    email!:string;
    @Column({
        unique:true
    })
    @Column()
    password!:string;
}

