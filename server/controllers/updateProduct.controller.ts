import { Request, Response } from "express";
import UpdateProductService from "../services/updateProduct.service";

class UpdateProductController {
  async handle(req: Request, res: Response) {
    try {
      const { uuid } = req.params;
      const data = req.body;

      const updateProductService = new UpdateProductService();

      const product = await updateProductService.execute(uuid, data);

      return res.status(200).json(product);
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}

export default UpdateProductController;
