import {RouterProvider} from "react-router-dom";
import {addLocale, PrimeReactProvider} from "primereact/api";
import {ru} from '@repo/ui/locale';

import {router} from "./router";
import {UserProvider} from "@repo/users/model";

addLocale('ru', ru);

export function ApplicationProvider() {
    return (
        <PrimeReactProvider value={{locale: 'ru'}}>
            <UserProvider>
                <RouterProvider router={router}/>
            </UserProvider>
        </PrimeReactProvider>
    )
}