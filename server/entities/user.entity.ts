import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Product } from "./product.entity";
import { v4 as uuid } from "uuid";

@Entity()
export class User {
  @PrimaryColumn("uuid", { default: uuid() })
  uuid: string;

  @Column()
  username: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  confirmPassword: string;

  @OneToMany((type) => Product, (product) => product.user) products: Product[];
}
