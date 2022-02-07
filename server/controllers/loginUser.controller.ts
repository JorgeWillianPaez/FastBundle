import { Request, Response } from "express";
import LoginUserService from "../services/loginUser.service";

class LoginUserController {
  async handle(req: Request, res: Response) {
    try {
      const { username, password } = req.body;

      const loginUserService = new LoginUserService();

      const token = await loginUserService.execute(username, password);

      return res.status(200).json({ message: token });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}

export default LoginUserController;
