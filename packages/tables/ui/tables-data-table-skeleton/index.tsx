import {Skeleton} from "primereact/skeleton";
import {Flex, Stack} from "@repo/ui/components";

import styles from './styles.module.css';

export function TablesDataTableSkeleton() {
    return (
        <Flex className={styles.root}>
            <Stack className={styles.column} spacing={1}>
                <Skeleton height="1.5rem"/>
                <Skeleton height="3rem"/>
                <Skeleton height="3rem"/>
                <Skeleton height="3rem"/>
                <Skeleton height="3rem"/>
                <Skeleton height="3rem"/>
                <Skeleton height="3rem"/>
                <Skeleton height="3rem"/>
                <Skeleton height="3rem"/>
            </Stack>
            <Stack className={styles.column} spacing={1}>
                <Skeleton height="1.5rem"/>
                <Skeleton height="3rem"/>
                <Skeleton height="3rem"/>
                <Skeleton height="3rem"/>
                <Skeleton height="3rem"/>
                <Skeleton height="3rem"/>
                <Skeleton height="3rem"/>
                <Skeleton height="3rem"/>
                <Skeleton height="3rem"/>
            </Stack>
        </Flex>
    )
}