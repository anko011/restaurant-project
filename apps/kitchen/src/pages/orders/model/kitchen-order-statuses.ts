import type {OrderStatus} from "@repo/orders/entities";

export type KitchenOrderStatuses = {
    NEW: OrderStatus;
    COOKING: OrderStatus
    COMPLETED: OrderStatus;
    CANCELED: OrderStatus;
}