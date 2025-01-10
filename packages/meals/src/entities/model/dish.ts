export type DishCategory = {
  readonly id: number;
  readonly name: string;
}

export type Ingredient = {
  readonly id: number;
  readonly name: string;
  readonly unit: string;
  readonly reserve: number;
}

export type RecipeIngredient = {
  readonly id: number;
  readonly ingredient: Ingredient;
  readonly dish: Dish;
  readonly quantity: number;
}

export type Dish = {
  readonly id: number;
  readonly ingredients: RecipeIngredient[];
  readonly category: DishCategory;
  readonly title: string;
  readonly description: string;
  readonly cost: number;
  readonly image: {
    readonly src: string;
    readonly alt: string;
  }
}
