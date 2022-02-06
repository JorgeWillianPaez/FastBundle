import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.entity";
import { v4 as uuid } from "uuid";

@Entity()
export class Product {
  @PrimaryColumn("uuid", { default: uuid() })
  uuid!: string;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  price: number;

  @Column()
  condition: string;

  @ManyToOne((type) => User, (user) => user.products) user: User;
}
