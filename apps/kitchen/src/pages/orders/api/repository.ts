import {KitchenOrderStatuses} from "../model";
import {kitchenOrderStatuses} from "./mock";

export class KitchenOrderStatusesRepository {
    public static async getAll(): Promise<KitchenOrderStatuses> {
        return new Promise(resolve => setTimeout(() => resolve(kitchenOrderStatuses), 500));
    }
}


