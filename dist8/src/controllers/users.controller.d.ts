import { UsersRepository } from "../repositories/users.repository";
import { Users } from "../models/users";
export declare class UsersController {
    private usersRepo;
    constructor(usersRepo: UsersRepository);
    getAllUsers(): Promise<Array<any>>;
    getOneUser(usersId: string): Promise<Users[]>;
}
