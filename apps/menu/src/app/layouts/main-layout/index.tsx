import {Link} from 'react-router-dom';

import {MainLayout as AppMainLayout} from '@repo/ui/layouts';
import {useCart} from "@repo/cart/model";
import {CartIndicator} from "@repo/cart/ui";

import {routePaths} from '~/shared/router';

import styles from './styles.module.css';

export function MainLayout() {
    const cart = useCart();
    return (
        <AppMainLayout
            headerStart={
                <Link to={routePaths.home()}>Ресторан</Link>
            }
            headerEnd={
                <>
                    <Link to={routePaths.orders()} className={styles.orders}>Мои заказы</Link>
                    <CartIndicator value={cart.totalCount} to={routePaths.cart()}/>
                </>
            }
        />

    )
}