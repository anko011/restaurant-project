export type MealCategory = {
    id: number;
    name: string;
}

export type Meal = {
    id: number;
    title: string;
    description: string;
    category: MealCategory;
    image: {
        src: string;
        alt: string;
    };
    cost: number;
}
