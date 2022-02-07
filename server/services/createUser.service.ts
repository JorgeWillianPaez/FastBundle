import { UsersRepository } from "../repositories/user.repository";
import { getCustomRepository } from "typeorm";

interface IUserData {
  username: string;
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ username, name, email, password }: IUserData) {
    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExist = await usersRepository.findOne({ username });

    if (userAlreadyExist) {
      throw "Nome de usuário já existe!";
    }

    const emailAlreadyExist = await usersRepository.findOne({ email });

    if (emailAlreadyExist) {
      throw "Já existe uma conta com este email!";
    }

    const user = usersRepository.create({
      username,
      name,
      email,
      password,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
