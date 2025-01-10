import {type RouteObject} from "react-router-dom";
import {Paper, Stack} from "@repo/ui/components";
import {type Order, OrdersDataTable, type OrderStatus, useOrdersRepository} from "@repo/orders/entities";

import {routePaths} from "~/shared/router";

import {ChangeStatusButton} from "./ui";
import {useKitchenOrderStatusesRepository} from "./api";

export function OrdersPage() {
    const {items: orders, isLoading: isLoadingOrders} = useOrdersRepository();
    const {items: kitchenStatuses, isLoading: isLoadingKitchenStatuses} = useKitchenOrderStatusesRepository();

    const isLoading = isLoadingOrders && isLoadingKitchenStatuses;

    const handleChangeStatus = (_: Order) => (_: OrderStatus) => {

    }


    return (
        <>
            <Stack>
                <Paper><h1>Заказы</h1></Paper>

                <Paper>
                    <OrdersDataTable orders={orders ?? []}
                                     isLoading={isLoading}
                                     actionRender={(order) =>
                                         <ChangeStatusButton order={order}
                                                             kitchenStatuses={kitchenStatuses!}
                                                             onChangeStatus={handleChangeStatus(order)}
                                         />
                                     }
                    />
                </Paper>
            </Stack>
        </>
    )
}

export const ordersRoute: RouteObject = {
    path: routePaths.orders(),
    element: <OrdersPage/>
}