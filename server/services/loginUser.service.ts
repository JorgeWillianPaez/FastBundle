import { UsersRepository } from "../repositories/user.repository";
import { getCustomRepository } from "typeorm";
import jwt from "jsonwebtoken";
import config from "../utils/jwtconfig";

class LoginUserService {
  async execute(username: string, password: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ username });

    if (!user) {
      throw "Usuário não existe!";
    } else if (user.password != password) {
      throw "Senha incorreta!";
    }

    const token = jwt.sign({ username: username }, config.secret, {
      expiresIn: config.expiresIn,
    });

    return token;
  }
}

export default LoginUserService;
