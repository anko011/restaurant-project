import {createBrowserRouter, Navigate} from "react-router-dom";
import {privateRoute} from "@repo/users/model";

import {ordersRoute} from "~/pages/orders";
import {recipesRoute} from "~/pages/recipes";
import {ingredientsRoute} from "~/pages/ingredients";
import {signInRoute} from "~/pages/sign-in";
import {routePaths} from "~/shared/router";

import {MainLayout} from "./layout";

const Layout = privateRoute(MainLayout, routePaths.signIn());

export const router = createBrowserRouter([
    {
        path: routePaths.root,
        element: <Layout/>,
        children: [ordersRoute, recipesRoute, ingredientsRoute]
    },
    {
        children: [signInRoute]
    },
    {
        path: '*',
        element: <Navigate to={routePaths.home()}/>
    }
])