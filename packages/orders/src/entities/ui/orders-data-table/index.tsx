import {type ReactNode, useState} from "react";
import {DataTable, DataTableExpandedRows, type DataTableRowData} from "primereact/datatable";
import {Column} from "primereact/column";
import {Tag} from "primereact/tag";
import {Skeleton} from "primereact/skeleton";

import type {Order} from '#/entities';

type OrdersTableDataProps = {
    orders: Order[];
    actionRender?: (order: Order) => ReactNode;
    isLoading?: boolean;
};

const headerTemplate = (data: Order) => (
    <span>Номер столика: {data.tablePosition}</span>
);


const statusBodyTemplate = (row: DataTableRowData<Order[]>) => (
    <Tag value={row.status.name}
         severity={row.status.severity}/>
)

export function OrdersDataTable({orders, isLoading, actionRender}: OrdersTableDataProps) {
    const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | Order[]>([]);

    return (
        <DataTable value={isLoading ? Array.from({length: 10}).map((_, i) => ({id: i})) : orders}
                   rowGroupMode="subheader"
                   groupRowsBy="tablePosition"
                   sortMode="single"
                   sortField="tablePosition"
                   size="small"
                   sortOrder={1}
                   expandableRowGroups={!isLoading}
                   expandedRows={expandedRows}
                   onRowToggle={(e) => setExpandedRows(e.data)}
                   rowGroupHeaderTemplate={!isLoading && headerTemplate}
        >
            <Column
                field="meal.title"
                header="Блюдо"
                sortable
                body={isLoading ? <Skeleton/> : null}
            />

            <Column
                field="status"
                header="Статус"
                body={isLoading ? <Skeleton/> : statusBodyTemplate}
            />

            {actionRender && (
                <Column
                    body={isLoading ? <Skeleton/> : actionRender}
                    style={{width: '15rem'}}/>
            )}
        </DataTable>
    )
}