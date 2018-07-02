import { UsersRepository } from "../repositories/users.repository";
export declare class LoginController {
    private usersRepo;
    constructor(usersRepo: UsersRepository);
    login(email: string): Promise<Array<any>>;
}
