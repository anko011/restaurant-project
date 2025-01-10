import { RouteObject } from 'react-router-dom';

import { Paper, Stack } from '@repo/ui/components';
import { OrdersList, useOrdersRepository } from '@repo/orders/entities';

import { routePaths } from '~/shared/router';
import { useCurrentTableStore } from '@repo/tables/model';

export function OrdersPage() {
  const {guestId} = useCurrentTableStore();

  const {
    items: orders,
    isLoading: isLoadingOrders,
  } = useOrdersRepository(guestId);

  return (
    <Stack>
      <Paper>
        <h1>Ваши заказы</h1>
      </Paper>
      <Paper>
        <OrdersList orders={orders}
                    isLoading={isLoadingOrders}
        />
      </Paper>
    </Stack>
  );
}

export const ordersRoute: RouteObject = {
  path: routePaths.orders(),
  element: <OrdersPage />,
};