//TODO импорты
import type {Booking} from "@repo/bookings/types";

export type TablesInfo = {
    minTablePosition: number;
    maxTablePosition: number;
}

export type TableStatus = {
    id: number;
    name: string;
    severity: 'info' | 'warning' | 'danger' | 'success';
}

export type Table = {
    id: number;
    position: number;
    status: TableStatus;
    booking?: Booking
}

//TODO перенести в mock

export const tableStatuses: TableStatus[] = [
    {id: 1, name: 'Свободен', severity: 'success'},
    {id: 2, name: 'Занят', severity: 'danger'},
]

export const tables: Table[] = [
    {id: 1, position: 1, status: tableStatuses.at(0)!},
    {id: 2, position: 2, status: tableStatuses.at(1)!},
    {id: 3, position: 3, status: tableStatuses.at(0)!},
    {id: 4, position: 4, status: tableStatuses.at(1)!},
    {id: 5, position: 5, status: tableStatuses.at(0)!},
    {id: 6, position: 6, status: tableStatuses.at(0)!},
    {id: 7, position: 7, status: tableStatuses.at(0)!},
    {id: 8, position: 8, status: tableStatuses.at(0)!},
    {id: 9, position: 9, status: tableStatuses.at(0)!},
    {id: 10, position: 10, status: tableStatuses.at(0)!},
]
