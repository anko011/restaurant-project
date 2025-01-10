import {Link, useNavigate} from "react-router-dom";
import {Menu} from "primereact/menu";
import {MenuItem} from "primereact/menuitem";
import {MainLayout as AppMainLayout} from "@repo/ui/layouts";

import {routePaths} from "~/shared/router";

export function MainLayout() {
    const navigate = useNavigate();

    const items: MenuItem[] = [
        {label: 'Заказы', icon: 'pi pi-search', command: () => navigate(routePaths.orders())},
        {label: 'Столы', icon: 'pi pi-plus', command: () => navigate(routePaths.tables())},
        {label: 'Бронирования', icon: 'pi pi-search', command: () => navigate(routePaths.bookings())}
    ];

    return <AppMainLayout
        headerStart={<Link to={routePaths.home()}>Официант</Link>}
        navigation={
            <nav>
                <Menu appendTo="self" model={items}/>
            </nav>
        }
    />
}