import {Link} from "react-router-dom";
import {Badge} from "primereact/badge";

import styles from './styles.module.css';

type CartIndicatorProps = {
    value: number;
    to: string;
}

export function CartIndicator({value, to}: CartIndicatorProps) {
    return (
        <Link className={styles.link} to={to}>
            <div className={styles.root}>
                <Badge className={styles.indicator} value={value}></Badge>
                <i className="pi pi-shopping-cart"/>
            </div>
        </Link>
    )
}