import { type Meal } from '@repo/meals';
import { Dispatch, SetStateAction } from 'react';

export type CartItem = Meal & { count: number };

export type CartStore = {
  items: CartItem[];
  totalCount: number;
  totalPrice: number;
  add(item: Meal, count: number): void;
  remove(item: Meal): void;
  set: Dispatch<SetStateAction<CartItem[]>>
  checkAvailableMeals(): Promise<{ id: number, title: string }[]>;
  confirm(guestId: number): any;
}

export type Cart = {
  tablePosition: number;
  items: CartItem[];
}
