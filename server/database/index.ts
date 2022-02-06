import { ConnectionOptions } from "typeorm";
import { Product } from "../entities/product.entity";
import { User } from "../entities/user.entity";

const config: ConnectionOptions = {
  type: "postgres",
};

export default config;
