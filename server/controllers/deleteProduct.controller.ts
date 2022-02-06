import { Request, Response } from "express";
import DeleteProductService from "../services/deleteProduct.service";

class DeleteProductController {
  async handle(req: Request, res: Response) {
    try {
      const { uuid } = req.params;

      const deleteProductService = new DeleteProductService();

      await deleteProductService.execute(uuid);

      return res.status(204);
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}

export default DeleteProductController;
