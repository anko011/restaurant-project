import {Skeleton} from "primereact/skeleton";

import styles from './styles.module.css';

export function MealMenuSkeleton() {
    return (
        <div className={styles.skeleton}>
            <Skeleton height="100%"/>
            <Skeleton height="100%"/>
            <Skeleton height="100%"/>
            <Skeleton height="100%"/>
            <Skeleton height="100%"/>
            <Skeleton height="100%"/>
            <Skeleton height="100%"/>
            <Skeleton height="100%"/>
        </div>
    )
}