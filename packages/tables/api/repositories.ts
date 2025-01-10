import type { Table, TablesInfo } from '../types';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
});

export class TablesInfoRepository {
  public static async get() {
    const response = await api.get<TablesInfo>('tables-info');
    return response.data;
  }
}


export class TablesRepository {
  public static async getAll() {
    const response = await api.get<Table[]>('tables-with-status');
    return response.data;
  }

  public static async getOne(id: number) {
    const response = await api.get<Table>('tables', {
      params: { id },
    });

    return response.data;
  }


  public static async takeTable(id: number | string, signal: AbortSignal) {
    const response = await api.post<{ guestId: number, tableId: number }>(`tables/${id}/take`, null, {
      signal,
    });
    return response.data;
  }
}


export class TableStatusesRepository {
  public static async getAll() {
    const response = await api.get<Table[]>('table-statuses');
    return response.data;
  }
}