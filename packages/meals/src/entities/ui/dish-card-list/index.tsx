import { type ReactNode } from 'react';
import { Skeleton } from 'primereact/skeleton';

import type { Dish } from '../../model';
import { DishCard } from '../dish-card';

import styles from './styles.module.css';

export type DishCardListProps = {
  dishes: Dish[];
  cardAction?: (dish: Dish) => ReactNode;
}

export function DishCardListSkeleton() {
  return (
    <div className={styles.root}>
      {Array.from({ length: 10 }).map((_, i) => <Skeleton height="20rem" key={i} />)}
    </div>
  );
}

export function DishCardList({ dishes, cardAction }: DishCardListProps) {
  return (
    <div className={styles.root}>
      {dishes.map((dish) => (
        <DishCard key={dish.id}
                  dish={dish}
                  footer={cardAction?.(dish)}
        />
      ))}
    </div>
  );
}