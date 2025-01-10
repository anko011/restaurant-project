import {useEffect, useState} from "react";
import {BookingWithTable} from "../types";
import {BookingsWithTableRepository as BookingsWithTableAPI} from './repositories';

type BookingsWithTableRepository =
    | { items: BookingWithTable[]; isLoading: false }
    | { items: undefined; isLoading: true }

export function useBookingsWithTableRepository(): BookingsWithTableRepository {
    const [items, setItems] = useState<BookingWithTable[]>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        BookingsWithTableAPI.getAll()
            .then(setItems)
            .finally(() => setIsLoading(false));
    }, [])

    return isLoading
        ? {items: undefined, isLoading: true}
        : {items: items ?? [], isLoading: false};
}