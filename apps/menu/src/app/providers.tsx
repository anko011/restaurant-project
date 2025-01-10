import { RouterProvider } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';

import { CartProvider } from '@repo/cart/model';

import { router } from './router';
import { CurrentTableStoreProvider } from '@repo/tables/model';

export function ApplicationProvider() {
  return (
    <PrimeReactProvider>
      <CurrentTableStoreProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </CurrentTableStoreProvider>
    </PrimeReactProvider>
  );
}