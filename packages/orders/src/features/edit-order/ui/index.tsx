import { useState } from 'react';
import { Button } from 'primereact/button';

import type { Meal } from '@repo/meals';
import type { TablesInfo } from '@repo/tables';

import type { Order, OrderStatus } from '#/entities';

import { OrderDialog } from './order-dialog';

type EditOrderButtonProps =
  {
    tablesInfo?: TablesInfo;
    meals?: Meal[];
    orderStatuses?: OrderStatus[];
    order: Order;
    isLoading: boolean;
  }

export function EditOrderButton(
  {
    meals,
    orderStatuses,
    order,
    tablesInfo,
    isLoading,
  }: EditOrderButtonProps) {
  const [isOpenOrderDialog, setIsOpenOrderDialog] = useState(false);


  return (
    <>
      <Button icon="pi pi-pencil"
              className="mr-2"
              loading={isLoading}
              rounded
              outlined
              onClick={() => setIsOpenOrderDialog(true)}
      />

      {!isLoading && (
        <OrderDialog isVisible={isOpenOrderDialog}
                     meals={meals!}
                     order={order}
                     orderStatuses={orderStatuses!}
                     onHide={() => setIsOpenOrderDialog(false)}
                     tablesInfo={tablesInfo!}
        />
      )}
    </>
  );
}