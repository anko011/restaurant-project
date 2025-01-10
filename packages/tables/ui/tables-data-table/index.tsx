import {type ReactNode} from "react";
import {DataTable, type DataTableRowData} from "primereact/datatable";
import {Column} from "primereact/column";
import {Tag} from "primereact/tag";

import {type Table} from "../../types";

type TablesDataTableProps = {
    tables: Table[];
    actionRender?: (table: Table) => ReactNode;
};

const statusBodyTemplate = (row: DataTableRowData<Table[]>) => (
    <Tag value={row.status.name}
         severity={row.status.severity}/>
)

export function TablesDataTable({tables, actionRender}: TablesDataTableProps) {
    return (
        <DataTable value={tables}
                   size="small"
        >
            <Column
                field="position"
                header="Номер стола"
                sortable
            />

            <Column
                field="status"
                header="Статус"
                body={statusBodyTemplate}

            />

            {actionRender && (
                <Column
                    body={actionRender}
                    style={{width: '5rem'}}/>
            )}
        </DataTable>
    )
}