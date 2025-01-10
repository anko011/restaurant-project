import {type RouteObject} from "react-router-dom";
import {Paper, Stack} from "@repo/ui/components";

import {routePaths} from "~/shared/router";

export function IngredientsPage() {

    return (
        <>
            <Stack>
                <Paper>
                    <h1>Ингредиенты</h1>
                </Paper>
                <Paper>

                </Paper>
            </Stack>
        </>
    )
}

export const ingredientsRoute: RouteObject = {
    path: routePaths.ingredients(),
    element: <IngredientsPage/>
}
