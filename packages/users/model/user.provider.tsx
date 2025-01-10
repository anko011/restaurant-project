import {createContext, ReactNode, useContext, useState} from "react";
import {User} from "../types";

type UserStore = {
    set(user?: User): void;
    user?: User;
}

const UserContext = createContext<UserStore | null>(null);

type UserProviderProps = {
    children?: ReactNode;
}

export function UserProvider({children}: UserProviderProps) {
    const [user, setUser] = useState<User>();
    return (
        <UserContext.Provider value={{user, set: setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const ctx = useContext(UserContext);
    if (!ctx) throw new Error("No user context provided");
    return ctx;
}