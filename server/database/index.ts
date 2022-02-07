import { ConnectionOptions } from "typeorm";
import { Product } from "../entities/product.entity";
import { User } from "../entities/user.entity";

const config: ConnectionOptions = {
  type: "postgres",
  host: "",
  port: 5432,
  username: "",
  password: "",
  database: "",
  entities: [Product, User],
  synchronize: true,
  logging: true,
};

export default config;
