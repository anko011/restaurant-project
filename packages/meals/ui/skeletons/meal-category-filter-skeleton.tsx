import {classNames} from "primereact/utils";
import {Skeleton} from "primereact/skeleton";

import styles from './styles.module.css';

export function MealCategoryFilterSkeleton() {
    return (
        <div className={classNames(styles.skeleton, styles.smallSkeleton)}>
            <Skeleton height="100%"/>
            <Skeleton height="100%"/>
            <Skeleton height="100%"/>
            <Skeleton height="100%"/>
        </div>
    )
}