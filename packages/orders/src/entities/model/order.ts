import {type Meal} from '@repo/meals';

export type OrderStatus = {
    id: number;
    name: string;
    severity: 'info' | 'success' | 'warning' | 'danger';
}

export type Order = {
    id: number;
    meal: Meal;
    status: OrderStatus;
    tablePosition: number;
}

