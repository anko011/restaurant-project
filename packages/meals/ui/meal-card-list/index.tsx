import {type ReactNode} from "react";

import {type Meal} from "../../types";

import {MealCard} from "../meal-card";
import styles from './styles.module.css';

export type MealCardListProps = {
    meals: Meal[];
    cardAction?: (meal: Meal) => ReactNode;
}

export function MealCardList({meals, cardAction}: MealCardListProps) {
    return (
        <div className={styles.mealCardList}>
            {meals.map((meal) => (
                <MealCard key={meal.id}
                          meal={meal}
                          footer={cardAction?.(meal)}
                />
            ))}
        </div>
    )
}