import { UsersRepository } from "../repositories/users.repository";
import { Users } from "../models/users";
export declare class UsersController {
    protected usersRepo: UsersRepository;
    constructor(usersRepo: UsersRepository);
    getAllUsers(): Promise<Array<any>>;
    getOneUserById(usersId: number): Promise<Users[]>;
}
