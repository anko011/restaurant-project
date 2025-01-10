import {RouteObject} from "react-router-dom";
import {Paper, Stack} from "@repo/ui/components";

import {routePaths} from "~/shared/router";

export function RecipesPage() {
    return (
        <>
            <Stack>
                <Paper>
                    <h1>Рецепты</h1>
                </Paper>

                <Paper>

                </Paper>
            </Stack>

        </>
    )
}

export const recipesRoute: RouteObject = {
    path: routePaths.recipes(),
    element: <RecipesPage/>
}