import GetAllProductsService from "../services/getAllProducts.service";
import { Request, Response } from "express";

class GetAllProductsController {
  async handle(req: Request, res: Response) {
    try {
      const getAllProductsService = new GetAllProductsService();

      const allProducts = await getAllProductsService.execute();

      return res.status(200).json(allProducts);
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}

export default GetAllProductsController;
