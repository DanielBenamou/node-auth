import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Arena {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  my_company_name!: string;

  @Column()
  company_name1!: string;

  @Column()
  company_name2!: string;

  @Column()
  company_name3!: string;

  @Column()
  company_name4!: number;
  
  @Column()
  company_name5!: number;
}
