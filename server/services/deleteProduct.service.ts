import { ProductsRepository } from "../repositories/product.repository";
import { getCustomRepository } from "typeorm";

class DeleteProductService {
  async execute(uuid: string) {
    const productsRepository = getCustomRepository(ProductsRepository);

    await productsRepository.delete(uuid);

    return "Usuário deletado!";
  }
}

export default DeleteProductService;
