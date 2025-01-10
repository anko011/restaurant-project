import {meals} from '@repo/meals/api';
import type {Order, OrderStatus} from "#/entities";


export const orderStatuses: OrderStatus[] = [
    {id: 1, name: 'Новый', severity: 'info'},
    {id: 2, name: 'Готовиться', severity: 'info'},
    {id: 3, name: 'Приготовлен', severity: 'success'},
    {id: 4, name: 'Отменен', severity: 'danger'},
]


export const orders: Order[] = [
    {id: 1, meal: meals.at(0)!, status: orderStatuses.at(0)!, tablePosition: 1},
    {id: 2, meal: meals.at(1)!, status: orderStatuses.at(1)!, tablePosition: 1},
    {id: 3, meal: meals.at(2)!, status: orderStatuses.at(2)!, tablePosition: 1},
    {id: 4, meal: meals.at(3)!, status: orderStatuses.at(3)!, tablePosition: 2},
    {id: 5, meal: meals.at(4)!, status: orderStatuses.at(0)!, tablePosition: 2},
    {id: 6, meal: meals.at(5)!, status: orderStatuses.at(1)!, tablePosition: 3},
]
