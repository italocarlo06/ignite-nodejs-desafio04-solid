import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const newuser = this.usersRepository.create({ 
      name,
      email
    });
    return newuser;
  }
}

export { CreateUserUseCase };
