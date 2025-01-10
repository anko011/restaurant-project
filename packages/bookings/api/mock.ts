import {tables} from '@repo/tables';
import {Booking, BookingWithTable} from "../types";

export const bookings: Booking[] = [
    {
        id: 1,
        tableId: 1,
        startDate: new Date(2025, 0, 25, 12, 0),
        endDate: new Date(2025, 0, 25, 13, 0),
        guestName: 'Вадим'
    },
    {
        id: 2,
        tableId: 1,
        startDate: new Date(2025, 0, 25, 13, 0),
        endDate: new Date(2025, 0, 25, 14, 0),
        guestName: 'Екатерина'
    },
    {
        id: 3,
        tableId: 2,
        startDate: new Date(2025, 0, 25, 12, 0),
        endDate: new Date(2025, 0, 25, 13, 0),
        guestName: 'Алексей'
    },
    {
        id: 4,
        tableId: 3,
        startDate: new Date(2025, 0, 25, 15, 0),
        endDate: new Date(2025, 0, 25, 16, 0),
        guestName: 'Михаил'
    },
]

function bookingsToBookingsWithTable(booking: Booking): BookingWithTable {
    return {
        id: booking.id,
        startDate: booking.startDate,
        endDate: booking.endDate,
        guestName: booking.guestName,
        table: tables.find(({id}) => id === booking.tableId)!,
    }
}


export const bookingsWithTable: BookingWithTable[] = bookings.map(bookingsToBookingsWithTable);
