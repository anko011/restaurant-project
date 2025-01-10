import axios from 'axios';
import { Dish, DishCategory } from '../model';

const api = axios.create({
  baseURL: 'http://localhost:3000/menu/',
});

export class DishesRepository {
  public static async getAllDishes() {
    const response = await api.get<Dish[]>('dishes/');
    return response.data;
  }

  public static async getDishesCategories() {
    const response = await api.get<DishCategory[]>('categories/');
    return response.data;
  }
}

