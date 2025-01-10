import {User} from "../types";
import {users} from "./mock";

export class AuthService {
    public static async signIn(login: string, password: string): Promise<User | undefined> {
        return new Promise(res => setTimeout(() => res(
            users.find((user) => user.login.toLowerCase() === login.toLowerCase())
        ), 500));
    }
}