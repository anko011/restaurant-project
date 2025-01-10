import {type ComponentType} from "react";
import {useUser} from "./user.provider";
import {Navigate} from "react-router-dom";

export function privateRoute<T extends {}>(Page: ComponentType<T>, authPath: string) {
    return function (props: T) {
        const {user} = useUser();

        if (!user) return <Navigate to={authPath}/>
        return <Page {...props}/>
    }
}