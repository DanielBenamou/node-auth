import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product_solo {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  company!: string;
  @Column()
  division!: string;
  @Column()
  job_title_classification!: string;
  @Column()
  total_number_of_employees_in_job_class!: number;
  @Column()
  total_number_of_employees_in_job_company!: number;
  @Column()
  ratio_job_class_ouf_of_total!: number;
}

