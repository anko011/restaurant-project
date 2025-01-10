import {BookingWithTable} from "../types";
import {bookingsWithTable} from "./mock";

export class BookingsWithTableRepository {
    public static async getAll() {
        return new Promise<BookingWithTable[]>(
            res => setTimeout(() => res(bookingsWithTable), 500)
        );
    }
}