import type {KitchenOrderStatuses} from "~/pages/orders/model/kitchen-order-statuses";
import {orderStatuses} from "@repo/orders/entities";

export const kitchenOrderStatuses: KitchenOrderStatuses = {
    NEW: orderStatuses.at(0)!,
    COOKING: orderStatuses.at(1)!,
    COMPLETED: orderStatuses.at(2)!,
    CANCELED: orderStatuses.at(3)!
};