import { Skeleton } from 'primereact/skeleton';

import styles from './srtyles.module.css';
import { SelectButton } from 'primereact/selectbutton';
import { Dish, DishCategory } from '../../model';
import { ReactNode, useState } from 'react';
import type { MealCategory } from '../../../../types';

type FilterItem = {
  name: string;
  value: number;
}

function toFilterItem(category: MealCategory): FilterItem {
  return {
    name: category.name,
    value: category.id,
  };
}

export function DishFiltersSkeleton() {
  return (
    <div className={styles.root}>
      {Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} height="5rem" />)}
    </div>
  );
}

type DishFilterProps = {
  dishes: Dish[];
  categories: DishCategory[];
  children: (items: Dish[]) => ReactNode
}

export function DishFilters({ categories, dishes, children }: DishFilterProps) {
  const [filterCategoryId, setFilterCategoryId] = useState<number | null>(null);
  const filters = (categories ?? []).map(toFilterItem);

  const filter = dishes.filter(
    (dish) => {
      if (filterCategoryId === null) return true;
      return dish.category.id === filterCategoryId;
    },
  );

  return (
    <>
      <SelectButton
        value={filterCategoryId}
        onChange={(e) => setFilterCategoryId(e.value)}
        optionLabel="name"
        options={filters}
      />

      {children(filter)}
    </>
  );
}

