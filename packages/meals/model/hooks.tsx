import { useState } from 'react';
import { SelectButton } from 'primereact/selectbutton';

import type { Meal, MealCategory } from '../types';

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

export function useMealCategoriesFilter(meals: Meal[], categories: MealCategory[]) {
  const [filterCategoryId, setFilterCategoryId] = useState<number | null>(null);
  const filters = (categories ?? []).map(toFilterItem);

  const filteredMeals = (meals ?? []).filter(
    (meal) => {
      if (filterCategoryId === null) return true;
      return meal.category.id === filterCategoryId;
    },
  );

  const node = <SelectButton
    value={filterCategoryId}
    onChange={(e) => setFilterCategoryId(e.value)}
    optionLabel="name"
    options={filters} />;

  return { items: filteredMeals, node };
}
