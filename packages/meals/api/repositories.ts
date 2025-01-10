import axios from 'axios';
import { type Meal, type MealCategory } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});


export class MealsRepository {
  public static async getAll(): Promise<Meal[]> {
    const response = await api.get<Meal[]>('menu/dishes');
    return response.data;
  }

  public static async checkMealsAvailability(meals: Meal[]) {
    const response = await api.post<{ id: number, title: string }[]>('menu/dishes/availability', {
      dishes: meals,
    });
    return response.data;
  }
}

export class MealCategoriesRepository {
  public static async getAll(): Promise<MealCategory[]> {
    const response = await api.get<MealCategory[]>('menu/categories');
    return response.data;
  }
}