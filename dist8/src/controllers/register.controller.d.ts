import { UsersRepository } from "../repositories/users.repository";
import { Users } from "../models/users";
export declare class RegisterController {
    private usersRepo;
    constructor(usersRepo: UsersRepository);
    createRepository(users: Users): Promise<Users>;
}
