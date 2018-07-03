import { repository } from "@loopback/repository";
import { UsersRepository } from "../repositories/users.repository";
import { post, get, requestBody, param, HttpErrors } from "@loopback/rest";
import { Users } from "../models/users";


export class RegisterController {
  constructor(
    @repository(UsersRepository.name) private usersRepo: UsersRepository
  ) { }

  @post('/register')
  async createRepository(@requestBody() users: Users) {
    if (!users.email || !users.password) {
      throw new HttpErrors.BadRequest('missing data');
    }

    let usersExist: boolean = !!(await this.usersRepo.count({ email: users.email }));

    if (usersExist) {
      throw new HttpErrors.BadRequest('user already exists');
    }
    {
      return await this.usersRepo.create(users);


    }
  }
}
