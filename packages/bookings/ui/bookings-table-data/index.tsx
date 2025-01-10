import {ReactNode} from "react";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

import {BookingWithTable} from "../../types";

type BookingsTableDataProps = {
    bookingsWithTable: BookingWithTable[];
    actionRender?: (booking: BookingWithTable) => ReactNode;
}

export function BookingsTableData({bookingsWithTable, actionRender}: BookingsTableDataProps) {
    return (
        <DataTable
            size="small"
            value={bookingsWithTable}
            editMode="row"
            tableStyle={{width: '100%'}}
        >
            <Column
                style={{width: '10%'}}
                header="Номер стола"
                field="table.position"
                sortable/>
            <Column
                header="Имя гостя"
                field="guestName"
                sortable
            />
            <Column
                header="Начало бронирования"
                field="startDate"
                dataType="date"
                sortable
                body={({startDate}: BookingWithTable) => `${startDate.toLocaleDateString()} ${startDate.toLocaleTimeString(new Intl.Locale('ru'), {timeStyle: 'short'})}`}
            />
            <Column
                header="Конец бронирования"
                field="endDate"
                dataType="date"
                sortable
                body={({endDate}: BookingWithTable) => `${endDate.toLocaleDateString()} ${endDate.toLocaleTimeString(new Intl.Locale('ru'), {timeStyle: 'short'})}`}
            />
            {actionRender && (
                <Column
                    body={actionRender}
                    style={{width: '5rem'}}/>
            )}
        </DataTable>
    )
}