import type {Order, OrderStatus} from "@repo/orders/entities";
import {Button} from "primereact/button";
import {Flex} from "@repo/ui/components";

import {KitchenOrderStatuses} from "../../model";

type ChangeStatusButton = {
    order: Order;
    kitchenStatuses: KitchenOrderStatuses;
    onChangeStatus?(status: OrderStatus): void;
}

export function ChangeStatusButton({order, kitchenStatuses, onChangeStatus}: ChangeStatusButton) {
    const handleClick = (status: OrderStatus) =>
        () => onChangeStatus?.(status);

    switch (order.status.id) {
        case kitchenStatuses.NEW.id:
            return <Button size="small" onClick={handleClick(kitchenStatuses.COOKING)}>Начать готовку</Button>
        case kitchenStatuses.COOKING.id:
            return (
                <Flex spacing={1}>
                    <Button size="small"
                            severity="success"
                            onClick={handleClick(kitchenStatuses.COMPLETED)}>Закончить</Button>

                    <Button size="small"
                            severity="danger"
                            onClick={handleClick(kitchenStatuses.CANCELED)}>Отменить</Button>
                </Flex>
            )
        default:
            return null;
    }
}