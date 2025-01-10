import { createContext, type ReactNode, useContext, useState } from 'react';
//TODO импорт @repo/meals
import type { Meal } from '@repo/meals/';
import { MealsRepository } from '@repo/meals/api';

import type { CartItem, CartStore } from '../types';
import { OrdersRepository } from '@repo/orders/entities';

type CartProviderProps = {
  children?: ReactNode;
}

const CartContext = createContext<CartStore | null>(null);

export function CartProvider({ children }: CartProviderProps) {
  const [items, set] = useState<CartItem[]>([]);

  const totalCount = items.map(({ count }) => count).reduce((prev, curr) => prev + curr, 0);
  const totalPrice = items.map(({ count, cost }) => count * cost).reduce((prev, curr) => prev + curr, 0);

  const add = (item: Meal, count: number) =>
    set(prev => {
      const existingItemIndex = prev.findIndex(({ id }) => id === item.id);
      if (existingItemIndex !== -1) return prev.map(
        (cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem,
      );
      return [...prev, { ...item, count }];
    });

  const remove = (item: Meal) => set(prev => prev.filter(cartItem => cartItem.id !== item.id));
  const checkAvailableMeals = () => MealsRepository.checkMealsAvailability(items);
  const confirm = (guestId: number) => OrdersRepository.create(guestId, items);

  return (
    <CartContext.Provider value={{ items, totalCount, totalPrice, add, remove, set, checkAvailableMeals, confirm }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('Cart context not provided');
  return context;
}