import {useEffect, useState} from "react";
import type {KitchenOrderStatuses} from "../model";

import {KitchenOrderStatusesRepository as KitchenOrderStatusesAPI} from './repository';

type KitchenOrderStatusesRepository =
    | { items: undefined; isLoading: true; }
    | { items: KitchenOrderStatuses; isLoading: false; }

export function useKitchenOrderStatusesRepository(): KitchenOrderStatusesRepository {
    const [items, setItems] = useState<KitchenOrderStatuses>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        KitchenOrderStatusesAPI.getAll()
            .then(setItems)
            .finally(() => setIsLoading(false));
    }, [])

    return isLoading
        ? {items: undefined, isLoading: true}
        : {items: items as KitchenOrderStatuses, isLoading: false};
}