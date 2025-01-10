import {useUser} from "../model";
import {AuthService} from "./auth.service";
import {useState} from "react";


export function useAuth() {
    const {user, set} = useUser();
    const [isLoading, setIsLoading] = useState(false);

    const signIn = async (login: string, password: string) => {
        setIsLoading(true);
        try {
            let res = await AuthService.signIn(login, password);
            set(res);
            return res;
        } finally {
            setIsLoading(false);
        }
    }

    return {user, isLoading, signIn};
}