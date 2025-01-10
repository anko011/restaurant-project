import {Table, TablesInfo, TableStatus} from "../types";
import {useEffect, useState} from "react";
import {
    TablesInfoRepository as TablesInfoAPI,
    TablesRepository as TablesAPI,
    TableStatusesRepository as TableStatusesAPI
} from './repositories';

type TablesInfoRepository =
    | { info: TablesInfo; isLoading: false }
    | { info: undefined; isLoading: true; }

export function useTablesInfoRepository(): TablesInfoRepository {
    const [info, setInfo] = useState<TablesInfo>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        TablesInfoAPI.get()
            .then(setInfo)
            .finally(() => setIsLoading(false));
    }, [])

    return isLoading
        ? {info: undefined, isLoading: true}
        : {info: info as TablesInfo, isLoading: false}
}

type TablesRepository =
    | { items: Table[]; isLoading: false }
    | { items: undefined; isLoading: true };

export function useTablesRepository(): TablesRepository {
    const [items, setItems] = useState<Table[]>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        TablesAPI.getAll()
            .then(setItems)
            .finally(() => setIsLoading(false));
    }, []);

    return isLoading
        ? {items: undefined, isLoading: true}
        : {items: items ?? [], isLoading: false};
}

type TableStatusesRepository =
    | { items: undefined; isLoading: true; }
    | { items: TableStatus[]; isLoading: false; }

export function useTableStatusesRepository(): TableStatusesRepository {
    const [items, setItems] = useState<TableStatus[]>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        TableStatusesAPI.getAll()
            .then(setItems)
            .finally(() => setIsLoading(false));
    }, [])

    return isLoading
        ? {items: undefined, isLoading: true}
        : {items: items ?? [], isLoading: false};
}