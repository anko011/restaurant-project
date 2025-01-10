import {ReactNode} from "react";
import {classNames} from "primereact/utils";

import styles from './styles.module.css';

type FlexProps = {
    children?: ReactNode;
    spacing?: 1 | 2 | 3 | 4;
    className?: string;
}

export function Flex({children, className, spacing = 4}: FlexProps): ReactNode {
    return (
        <div className={classNames(className, styles.root, styles[`spacing-${spacing}`])}>{children}</div>
    )
}