import { useEffect, useState } from 'react';
import type { Order, OrderStatus } from '#/entities';

import { OrdersRepository as OrdersAPI, OrderStatusesRepository as OrderStatusesAPI } from './repositories';

type OrdersRepository =
  | { items: undefined; isLoading: true; }
  | { items: Order[]; isLoading: false; }

export function useOrdersRepository(guestId: number): OrdersRepository {
  const [items, setItems] = useState<Order[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    OrdersAPI.getAll(guestId)
      .then(setItems)
      .finally(
        () => setIsLoading(false),
      );
  }, []);

  return isLoading
    ? { items: undefined, isLoading }
    : { items: items ?? [], isLoading };
}

type OrderStatusesRepository =
  | { items: undefined; isLoading: true; }
  | { items: OrderStatus[]; isLoading: false; }

export function useOrderStatusesRepository(): OrderStatusesRepository {
  const [items, setItems] = useState<OrderStatus[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    OrderStatusesAPI.getAll()
      .then(setItems)
      .finally(
        () => setIsLoading(false),
      );
  }, []);

  return isLoading
    ? { items: undefined, isLoading }
    : { items: items ?? [], isLoading };
}
