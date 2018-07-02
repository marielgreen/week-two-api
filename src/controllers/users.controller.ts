import { repository } from "@loopback/repository";
import { UsersRepository } from "../repositories/users.repository";
import { Users } from "../models/users";
import { get, param } from "@loopback/rest"

export class UsersController {
  constructor(
    @repository(UsersRepository.name) private usersRepo: UsersRepository
  ) { }

  @get("users")
  async getAllUsers(): Promise<Array<any>> {

    return await this.usersRepo.find();
  }

  @get("/users/{userId}")
  async getOneUser(
    @param.path.string("usersID") usersId: string
  ): Promise<Users[]> {
    return await this.usersRepo.find({
      where: {
        usersId: usersId
      }
    });
  }
}
