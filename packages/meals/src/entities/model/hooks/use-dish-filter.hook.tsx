import { useState } from 'react';
import type { MealCategory } from '../../../../types';
import { SelectButton } from 'primereact/selectbutton';
import { Dish, DishCategory } from '../dish';

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


export function useDishFilter() {
  const [filterCategoryId, setFilterCategoryId] = useState<number | null>(null);

  const filter = (dishes: Dish[]) => dishes.filter(
    (dish) => {
      if (filterCategoryId === null) return true;
      return dish.category.id === filterCategoryId;
    },
  );

  function DishFilters({ categories }: { categories: DishCategory[] }) {
    const filters = (categories ?? []).map(toFilterItem);
    return (
      <SelectButton
        value={filterCategoryId}
        onChange={(e) => setFilterCategoryId(e.value)}
        optionLabel="name"
        options={filters}
      />
    );
  }

  return {
    DishFilters,
    filter,
  };
}