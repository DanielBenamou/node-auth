import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product_Spend {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  company!: string;

  @Column()
  division!: string;

  @Column()
  job_title_classification!:string;

  @Column()
  total_number_of_employees_in_job_class!:number;

  @Column()
  avg_salary_pp_in_job_class!:number;

}

export {};