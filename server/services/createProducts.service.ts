import { ProductsRepository } from "../repositories/product.repository";
import { getCustomRepository } from "typeorm";

interface IProductData {
  name: string;
  category: string;
  price: number;
  condition: string;
}

class CreateProductService {
  async execute({ name, category, price, condition }: IProductData) {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = productsRepository.create({
      name,
      category,
      price,
      condition,
    });

    await productsRepository.save(product);

    return product;
  }
}

export default CreateProductService;
