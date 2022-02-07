import { ConnectionOptions } from "typeorm";
import { Product } from "../entities/product.entity";
import { User } from "../entities/user.entity";

const config: ConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "jorgewillian",
  password: "1234",
  database: "fast_bundle",
  entities: [Product, User],
  synchronize: true,
  logging: true,
};

export default config;
