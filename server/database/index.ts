import { ConnectionOptions } from "typeorm";
import { Product } from "../entities/product.entity";
import { User } from "../entities/user.entity";
import * as dotenv from "dotenv";

dotenv.config();

const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432 || process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ["src/entities/**/*.ts"],
  synchronize: true,
  logging: true,
};

export default config;
