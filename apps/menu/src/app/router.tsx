import {createBrowserRouter} from "react-router-dom";

import {homeRoute} from "~/pages/home";
import {cartRoute} from "~/pages/cart";
import {ordersRoute} from "~/pages/orders";
import {routePaths} from "~/shared/router";

import {MainLayout} from "./layouts";

export const router = createBrowserRouter([
    {
        path: routePaths.root,
        element: <MainLayout/>,
        children: [homeRoute, cartRoute, ordersRoute]
    }
]);