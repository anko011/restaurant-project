import {ReactNode} from "react";
import {classNames} from "primereact/utils";

import styles from './styles.module.css';

type StackProps = {
    children?: ReactNode;
    className?: string;
    spacing?: 1 | 2 | 3 | 4;
}

export function Stack({children, className, spacing = 4}: StackProps) {
    return (
        <div className={classNames(className, styles.root, styles[`spacing-${spacing}`])}>
            {children}
        </div>
    )
}