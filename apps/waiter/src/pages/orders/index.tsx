import { useState } from 'react';
import { type RouteObject } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';

import { useMealsRepository } from '@repo/meals/api';
import { useTablesInfoRepository } from '@repo/tables/api';
import { CartForm } from '@repo/cart/ui';

import { OrdersDataTable, useOrdersRepository, useOrderStatusesRepository } from '@repo/orders/entities';
import { EditOrderButton } from '@repo/orders/features';

import { Flex, Paper, Stack } from '@repo/ui/components';

import { routePaths } from '~/shared/router';

export function OrdersPage() {
  const { items: orders, isLoading: isLoadingOrders } = useOrdersRepository();
  const { items: meals, isLoading: isLoadingMeals } = useMealsRepository();
  const { items: orderStatuses, isLoading: isLoadingOrderStatuses } = useOrderStatusesRepository();
  const { info: tablesInfo, isLoading: isLoadingTablesInfo } = useTablesInfoRepository();

  const isLoading = isLoadingOrders || isLoadingMeals || isLoadingOrderStatuses || isLoadingTablesInfo;

  const [isOpenCartDialog, setIsOpenCartDialog] = useState(false);

  const handleClickCreateCart = () => {
    setIsOpenCartDialog(true);
  };

  return (
    <>
      <Stack>
        <Paper>
          <h1>Заказы</h1>
        </Paper>

        <Paper>
          <Toolbar
            start={
              <Flex>
                <Button
                  loading={isLoading}
                  label="Собрать корзину"
                  icon="pi pi-plus"
                  severity="success"
                  onClick={() => handleClickCreateCart()}
                />
              </Flex>
            }
          />

          <OrdersDataTable orders={orders ?? []}
                           isLoading={isLoading}
                           actionRender={(order) =>
                             <EditOrderButton
                               order={order}
                               meals={meals}
                               tablesInfo={tablesInfo}
                               orderStatuses={orderStatuses}
                               isLoading={isLoading}
                             />
                           }
          />

        </Paper>
      </Stack>

      {!isLoading && (
        <>
          <CartForm isVisible={isOpenCartDialog}
                    tablesInfos={tablesInfo}
                    meals={meals!}
                    onHide={() => setIsOpenCartDialog(false)}
          />
        </>
      )}
    </>
  );
}

export const ordersRoute: RouteObject = {
  path: routePaths.orders(),
  element: <OrdersPage />,
};