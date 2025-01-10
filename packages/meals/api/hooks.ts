import {useEffect, useState} from "react";
import type {Meal, MealCategory} from "../types";
import {MealCategoriesRepository as MealCategoriesAPI, MealsRepository as MealsAPI} from "./repositories";

type MealsRepository =
    | { items: undefined; isLoading: true; }
    | { items: Meal[]; isLoading: false; }

export function useMealsRepository(): MealsRepository {
    const [items, setItems] = useState<Meal[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        MealsAPI.getAll()
            .then(
                (data) => setItems(data)
            )
            .finally(
                () => setIsLoading(false)
            );
    }, [])

    return isLoading
        ? {items: undefined, isLoading}
        : {items: items ?? [], isLoading}
}

type MealCategoriesRepository =
    | { items: undefined; isLoading: true; }
    | { items: MealCategory[]; isLoading: false; }

export function useMealCategoriesRepository(): MealCategoriesRepository {
    const [items, setItems] = useState<MealCategory[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        MealCategoriesAPI.getAll()
            .then(
                (data) => setItems(data)
            )
            .finally(
                () => setIsLoading(false)
            );
    }, [])

    return isLoading
        ? {items: undefined, isLoading}
        : {items: items ?? [], isLoading}
}