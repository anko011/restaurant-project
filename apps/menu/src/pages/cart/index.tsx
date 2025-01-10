import { useRef, useState } from 'react';
import { RouteObject } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

import type { CartItem } from '@repo/cart';
import { useCart } from '@repo/cart/model';
import { CartList } from '@repo/cart/ui';
import { Paper } from '@repo/ui/components';

import { routePaths } from '~/shared/router';

import styles from './styles.module.css';
import { Messages } from 'primereact/messages';
import { useCurrentTableStore } from '@repo/tables/model';

export function CartPage() {
  const cart = useCart();
  const { guestId } = useCurrentTableStore();

  const toastRef = useRef<Toast>(null);
  const msgRef = useRef<Messages>(null);
  const [isLoadingPaymentButtons, setIsLoadingPaymentButtons] = useState(false);

  const handleDeleteItem = (item: CartItem) => {
    if (!toastRef.current) return;
    cart.remove(item);
    toastRef.current.show({
      severity: 'warn',
      summary: 'Корзина',
      detail: `${item.title} успешно удален из корзины`,
    });
  };

  const handleClickPay = () => {
    setIsLoadingPaymentButtons(true);

    cart.checkAvailableMeals()
      .then((unavailableItems) => {
        if (unavailableItems.length > 0) {
          msgRef.current?.show(unavailableItems.map(({ title }) => ({
            sticky: true,
            life: 1000,
            severity: 'error',
            summary: 'Ошибка',
            detail: `Извините! У нас закончились ингредиенты для ${title}. Выберите другое блюдо.`,
            closable: true,
          })));
          cart.set((prev) => [...prev.filter(({ id }) => !unavailableItems.map(({ id }) => id).includes(id))]);
          return;
        }

        cart.confirm(guestId).then(() => {
          msgRef.current?.show({
            sticky: true,
            life: 1000,
            severity: 'success',
            summary: 'Заявка',
            detail: `Все прошло успешно! Готовим!`,
            closable: true,
          });

          cart.set([]);
        });
      })
      .finally(() => setIsLoadingPaymentButtons(false));
  };

  return (
    <div className={styles.root}>
      <Paper className={styles.header}>
        <h1>Ваша корзина</h1>
        {cart.items && cart.items.length > 0 && (
          <div className={styles.costBlock}>
            <span className={styles.costText}>Сумма к оплате: {cart.totalPrice} руб.</span>
            <Button loading={isLoadingPaymentButtons}
                    severity="success"
                    onClick={handleClickPay}
            >
              Оплатить
            </Button>
          </div>
        )}
      </Paper>
      <Paper>
        <CartList items={cart.items}
                  onDeleteItem={handleDeleteItem}
        />
      </Paper>
      <Toast ref={toastRef} />
      <Messages ref={msgRef} />
    </div>
  );
}

export const cartRoute: RouteObject = {
  path: routePaths.cart(),
  element: <CartPage />,
};