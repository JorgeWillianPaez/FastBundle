import { ProductsRepository } from "../repositories/product.repository";
import { getCustomRepository } from "typeorm";

class GetAllProductsService {
  async execute() {
    const productsRepository = getCustomRepository(ProductsRepository);

    const products = await productsRepository.find();

    return products;
  }
}

export default GetAllProductsService;
