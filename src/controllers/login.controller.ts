import { repository } from "@loopback/repository";
import { UsersRepository } from "../repositories/users.repository";
import { get, param } from "@loopback/rest";
import { Users } from "../models/users";

export class LoginController {
  constructor(
    @repository(UsersRepository.name) private usersRepo: UsersRepository
  ) { }

  @get('/login')
  async login(
    @param.query.string("email") email: string
  ): Promise<Array<any>> {

    return await this.usersRepo.find({
      where: {
        email
      }
    });
  }
}
