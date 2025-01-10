import {ReactNode} from "react";
import {classNames} from "primereact/utils";

import styles from './styles.module.css';

type PaperProps = {
    className?: string;
    children?: ReactNode
}

export function Paper({children, className}: PaperProps) {
    return (
        <div className={classNames(styles.root, className)}>
            {children}
        </div>
    )
}