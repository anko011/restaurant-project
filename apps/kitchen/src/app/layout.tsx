import {Link, useNavigate} from "react-router-dom";
import {Menu} from "primereact/menu";
import {MenuItem} from "primereact/menuitem";
import {MainLayout as AppMainLayout} from "@repo/ui/layouts";

import {routePaths} from "~/shared/router";

export function MainLayout() {
    const navigate = useNavigate();

    const items: MenuItem[] = [
        {label: 'Заказы', icon: 'pi pi-search', command: () => navigate(routePaths.orders())},
        {label: 'Рецепты', icon: 'pi pi-plus', command: () => navigate(routePaths.recipes())},
        {label: 'Ингредиенты', icon: 'pi pi-search', command: () => navigate(routePaths.ingredients())}
    ];

    return <AppMainLayout
        headerStart={<Link to={routePaths.home()}>Кухня</Link>}
        navigation={
            <nav>
                <Menu appendTo="self" model={items}/>
            </nav>
        }
    />
}