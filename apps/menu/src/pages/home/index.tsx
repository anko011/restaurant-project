import { Suspense, useRef } from 'react';
import { Await, RouteObject, useLoaderData } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

import { type Meal } from '@repo/meals/api';
import { useCart } from '@repo/cart/model';
import { Paper, Stack } from '@repo/ui/components';

import { routePaths } from '~/shared/router';
import {
  DishCardList,
  DishCardListSkeleton,
  DishesRepository,
  DishFiltersSkeleton,
  useDishFilter,
} from '@repo/meals/entities';

export function HomePage() {
  const data = useLoaderData<typeof loader>();
  const cart = useCart();
  const toastRef = useRef<Toast>(null);
  const { DishFilters, filter } = useDishFilter();

  const handleClickAdd = (meal: Meal) => () => {
    cart.add(meal, 1);

    if (!toastRef.current) return;
    toastRef.current.show({
      severity: 'success',
      summary: 'Корзина',
      detail: `${meal.title} успешно добавлен в корзину`,
    });
  };

  return (
    <>
      <Stack>

        <Paper>
          <h2>Добро пожаловать!</h2>
          <div>
            <h3>Популярные блюда</h3>
            <p>Выберите из нашего широкого ассортимента.</p>
          </div>
        </Paper>

        <Suspense fallback={
          <>
            <DishFiltersSkeleton />
            <DishCardListSkeleton />
          </>
        }>
          <Await resolve={data}>
            {([dishes, dishCategories]) => (
              <>
                <DishFilters categories={dishCategories} />
                <DishCardList dishes={filter(dishes)}
                              cardAction={
                                (dish) => (
                                  <Button onClick={handleClickAdd(dish)}>Добавить</Button>
                                )
                              }
                />
              </>
            )}
          </Await>
        </Suspense>


      </Stack>

      <Toast ref={toastRef} />
    </>
  );
}

function loader() {
  const dishes = DishesRepository.getAllDishes();
  const dishCategories = DishesRepository.getDishesCategories();
  return Promise.all([dishes, dishCategories]);
}

export const homeRoute: RouteObject = {
  loader,
  path: routePaths.home(),
  index: true,
  element: <HomePage />,
};