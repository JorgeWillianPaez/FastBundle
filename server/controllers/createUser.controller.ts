import { Request, Response } from "express";
import CreateUserService from "../services/createUser.service";

class CreateUserController {
  async handle(req: Request, res: Response) {
    try {
      const { username, name, email, password } = req.body;

      const createUserService = new CreateUserService();

      const user = await createUserService.execute({
        username,
        name,
        email,
        password,
      });

      return res.status(201).json(user);
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}

export default CreateUserController;
