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

    const user = usersRepository.create({ username, name, email, password });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
