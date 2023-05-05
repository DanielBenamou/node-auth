import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class product_overview {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  company!: string;

  @Column()
  division!: string;

  @Column()
  total_number_of_employees_in_division!:string;

  @Column()
  total_number_of_employees_in_company!:string;

  @Column()
  ratio_division_out_of_total!:number;

}
