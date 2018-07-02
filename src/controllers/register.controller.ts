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
    if (!users.email || !users.email || !users.name) {
      throw new HttpErrors.BadRequest('Not enough information entered');
    }
    {
      return await this.usersRepo.create(users);


    }
  }
}
