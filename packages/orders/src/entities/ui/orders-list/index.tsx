import {DataView} from "primereact/dataview";
import {Image} from "primereact/image";
import {Tag} from "primereact/tag";
import {Skeleton} from "primereact/skeleton";

import type {Order} from "#/entities";

import styles from './styles.module.css';

type CartListItemProps = {
    order: Order;
    isLoading?: boolean;
}

function OrderListItem({order, isLoading}: CartListItemProps) {
    return (
        <div className={styles.item}>
            {isLoading
                ? <Skeleton height="5rem"/>
                : <Image className={styles.itemImage}
                         src={order.meal.image.src}
                         alt={order.meal.image.alt}
                         width="150" height="100"
                />
            }

            <header className={styles.itemHeader}>
                {isLoading
                    ? <Skeleton width="20%"/>
                    : <h3>{order.meal.title}</h3>
                }

                <div className={styles.itemHeaderInfo}>
                    {isLoading
                        ? (
                            <>
                                <Skeleton width="10%"/>
                                <Skeleton width="5%"/>
                            </>
                        ) : (
                            <>
                                <Tag>{order.meal.category.name}</Tag>
                                <span>{order.meal.cost} руб.</span>
                            </>
                        )
                    }

                </div>

                {isLoading
                    ? <Skeleton height='2.5rem'/>
                    : <span>{order.meal.description}</span>
                }
            </header>

            <footer className={styles.itemFooter}>
                {isLoading
                    ? <Skeleton/>
                    : <Tag severity={order.status.severity}>{order.status.name}</Tag>
                }

            </footer>
        </div>
    )
}

type CartListProps = {
    orders?: Order[];
    isLoading?: boolean;
}

export function OrdersList({orders, isLoading}: CartListProps) {

    const listTemplate = (items: Order[]) => {
        if (!items || items.length === 0) return 'У вас отсутствуют активные заказы';
        return (
            <div className={styles.root}>
                {items.map(
                    (item) => <OrderListItem order={item} key={item.id} isLoading={isLoading}/>
                )}
            </div>
        )
    };

    return (
        <DataView value={isLoading ? Array.from({length: 10}).map((_, i) => ({id: i})) : orders}
                  layout="list"
                  listTemplate={listTemplate}
        />
    )
}