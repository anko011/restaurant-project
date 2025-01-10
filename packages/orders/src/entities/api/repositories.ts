import type { Order, OrderStatus } from '#/entities';
import { orderStatuses } from './mock';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/orders',
});

export class OrdersRepository {
  public static async getAll(guestId: number): Promise<Order[]> {
    const response = await api.get(`guest/${guestId}/items`);
    return response.data;
  }

  public static async create(guestId: number, items: { id: number, count: number }[]) {
    const response = await api.post(``, { guestId, items });
    return response.data;
  }
}

export class OrderStatusesRepository {
  public static async getAll(): Promise<OrderStatus[]> {
    return new Promise(resolve => setTimeout(() => resolve(orderStatuses), 500));
  }
}
