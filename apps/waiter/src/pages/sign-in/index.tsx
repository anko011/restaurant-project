import {RouteObject, useNavigate} from "react-router-dom";
import {routePaths} from "~/shared/router";
import {Stack} from "@repo/ui/components";
import {InputText} from "primereact/inputtext";
import {useState} from "react";
import {Password} from "primereact/password";
import {Button} from "primereact/button";

import styles from './styles.module.css';
import {useAuth} from "@repo/users/api";

export function SignInPage() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const auth = useAuth();
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        setError("");
        auth.signIn(login, password)
            .then((user) => {
                if (user) return navigate(routePaths.home());
                setError("Ну шото пошло не так");
            });
    }

    return (
        <div className={styles.root}>
            <Stack>
                {error}
                <label className={styles.field}>
                    <span>Логин</span>
                    <InputText value={login} onChange={(e) => setLogin(e.target.value)}/>
                </label>
                <label className={styles.field}>
                    <span>Пароль</span>
                    <Password value={password} onChange={(e) => setPassword(e.target.value)} feedback={false}
                              tabIndex={1}/>
                </label>
                <Button onClick={handleClickSignIn} loading={auth.isLoading}>Войти</Button>
            </Stack>
        </div>
    )
}

export const signInRoute: RouteObject = {
    path: routePaths.signIn(),
    element: <SignInPage/>

}