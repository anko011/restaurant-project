import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { TableStatus } from '../types';
import { TablesRepository } from '../api';
import { AxiosError } from 'axios';

type CurrentTableStore = {
  tableId: number;
  guestId: number;
  checkTableStatus(): Promise<TableStatus>
}

const CurrentTableContext = createContext<CurrentTableStore | null>(null);

export function CurrentTableStoreProvider({ children }: { children?: ReactNode }) {
  const params = new URLSearchParams(location.search);
  const tableIdParam = params.get('tableId');

  if (!tableIdParam) return 'Страница недоступна';

  const [tableId, setTableId] = useState<number>();
  const [guestId, setGuestId] = useState<number>();
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    const controller = new AbortController();

    TablesRepository
      .takeTable(tableIdParam, controller.signal)
      .then((data) => {
        setGuestId(data.guestId);
        setTableId(data.tableId);
        setMessage('');
      })
      .catch(err => {
        if (err instanceof AxiosError && err.status === 422) setMessage(err.response?.data.message);
      });

    return () => {
      controller.abort();
    };
  }, []);


  if (!tableId || !guestId) return message;

  const checkTableStatus = async () => {
    const { status } = await TablesRepository.getOne(tableId);
    return status;
  };

  return (
    <CurrentTableContext.Provider value={{ tableId, guestId, checkTableStatus }}>
      {children}
    </CurrentTableContext.Provider>
  );
}

export function useCurrentTableStore() {
  const ctx = useContext(CurrentTableContext);
  if (!ctx) throw new Error('useCurrentTableStore must be used within CurrentTableStoreProvider');
  return ctx;
}