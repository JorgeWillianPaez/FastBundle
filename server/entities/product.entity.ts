import { Entity, PrimaryColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class Product {
  @PrimaryColumn("uuid", { default: uuid() })
  uuid: string;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  price: number;

  @Column()
  condition: string;
}
