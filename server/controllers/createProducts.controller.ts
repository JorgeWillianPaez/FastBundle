import { Request, Response } from "express";
import CreateProductService from "../services/createProducts.service";

class CreateProductController {
  async handle(req: Request, res: Response) {
    try {
      const { name, category, price, condition } = req.body;

      const createUserService = new CreateProductService();

      const product = await createUserService.execute({
        name,
        category,
        price,
        condition,
      });

      return res.status(201).json(product);
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}

export default CreateProductController;
