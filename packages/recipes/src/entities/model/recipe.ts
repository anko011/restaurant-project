export type Ingredient = {
    id: number;
    name: string;
}

export type Recipe = {
    id: number;
    mealId: number;
    ingredients: Ingredient[]
    details: string[];
};