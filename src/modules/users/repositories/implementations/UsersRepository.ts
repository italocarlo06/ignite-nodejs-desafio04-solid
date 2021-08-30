import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {  

    const user = this.findByEmail(email);
    if (user){
      throw new Error("User already registered!");
    }

    const newuser = new User();
    Object.assign(newuser, {
      name,
      email
    });

    this.users.push(newuser);

    return newuser;
  }

  findById(id: string): User | undefined {
    const user = this.users.find( user => user.id === id);
    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find( user => user.email === email);
    return user;
  }

  turnAdmin(receivedUser: User): User {
    Object.assign(receivedUser,{
      admin: true,
      updated_at: new Date()
    });

    return receivedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
