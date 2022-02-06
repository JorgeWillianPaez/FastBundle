import { ProductsRepository } from "../repositories/product.repository";
import { getCustomRepository } from "typeorm";

class UpdateProductService {
  async execute(uuid: string, data: {}) {
    const productsRepository = getCustomRepository(ProductsRepository);

    await productsRepository.update(uuid, data);

    const product = await productsRepository.findOne(uuid);

    return product;
  }
}

export default UpdateProductService;
