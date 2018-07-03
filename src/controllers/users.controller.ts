import { repository } from "@loopback/repository";
import { UsersRepository } from "../repositories/users.repository";
import { Users } from "../models/users";
import { get, param, HttpErrors } from "@loopback/rest"

export class UsersController {
  constructor(
    @repository(UsersRepository.name) protected usersRepo: UsersRepository
  ) { }

  @get("/users")
  async getAllUsers(): Promise<Array<any>> {

    return await this.usersRepo.find();
  }

  @get("/users/{userId}")
  async getOneUserById(
    @param.path.number("usersId") usersId: number
  ): Promise<Users[]> {
    let usersExist: boolean = !!(await this.usersRepo.count({ usersId }));

    if (!usersExist) {
      throw new HttpErrors.BadRequest('user Id ${id} does not exist');
    }

    return await this.usersRepo.find({
      where: {
        usersId: usersId
      }
    });
  }
}
