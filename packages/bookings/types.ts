//TODO импорты

import {type Table} from "@repo/tables/types";

export type Booking = {
    id: number;
    tableId: number;
    startDate: Date;
    endDate: Date;
    guestName: string;
}

export type BookingWithTable = Omit<Booking, 'tableId'> & { table: Table };


