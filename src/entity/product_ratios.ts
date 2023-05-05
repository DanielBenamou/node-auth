import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product_Ratio {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  a_company!: string;

  @Column()
  a_division!: string;

  @Column()
  a_job_title_classification!: string;

  @Column()
  a_total_number_of_employees_in_job_class!: number;
  @Column()
  b_company!: string;
  @Column()
  b_division!: string;
  @Column()
  b_job_title_classification!: string;
  @Column()
  b_total_number_of_employees_in_job_class!: number;
  @Column()
  ratio!:number;
}
