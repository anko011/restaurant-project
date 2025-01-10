import { useState } from 'react';
import { type RouteObject } from 'react-router-dom';
import { Button } from 'primereact/button';

import { type Table } from '@repo/tables';
import { TableDialog, TablesDataTable, TablesDataTableSkeleton } from '@repo/tables/ui';
import { useTablesRepository, useTableStatusesRepository } from '@repo/tables/api';
import { Paper, Stack } from '@repo/ui/components';

import { routePaths } from '~/shared/router';
import { privateRoute } from '@repo/users/model';

export function TablesPage() {
  const {
    items: tables,
    isLoading: isLoadingTables,
  } = useTablesRepository();

  const {
    items: tableStatuses,
    isLoading: isLoadingTableStatuses,
  } = useTableStatusesRepository();

  const [selectedTable, setSelectedTable] = useState<Table>();
  const [isShowTableDialog, setShowTableDialog] = useState(false);

  const handleClickEditTable = (table: Table) => {
    setSelectedTable(table);
    setShowTableDialog(true);
  };

  return (
    <>
      <Stack>
        <Paper>
          <h1>Столы</h1>
        </Paper>

        <Paper>
          {isLoadingTables
            ? <TablesDataTableSkeleton />
            : <TablesDataTable tables={tables}
                               actionRender={(table) =>
                                 <Button icon="pi pi-pencil"
                                         rounded
                                         outlined
                                         className="mr-2"
                                         onClick={() => handleClickEditTable(table)}
                                 />
                               }
            />
          }
        </Paper>
      </Stack>

      {!isLoadingTableStatuses && selectedTable &&
        <TableDialog table={selectedTable}
                     tableStatuses={tableStatuses}
                     isVisible={isShowTableDialog}
                     onHide={() => setShowTableDialog(false)}
        />
      }
    </>
  );
}

const Page = privateRoute(TablesPage, routePaths.signIn());
export const tablesRoute: RouteObject = {
  path: routePaths.tables(),
  element: <Page />,
};