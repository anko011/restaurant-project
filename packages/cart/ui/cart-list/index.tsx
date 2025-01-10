import {type ReactNode} from "react";
import {Image} from "primereact/image";
import {Tag} from "primereact/tag";
import {DataView} from "primereact/dataview";
import {Button} from "primereact/button";

import {type CartItem} from "../../types";

import styles from './styles.module.css';

type CartListItemProps = {
    item: CartItem;
    action?: ReactNode
}

function CartListItem({item, action}: CartListItemProps) {
    return (
        <div className={styles.item}>
            <Image className={styles.itemImage} src={item.image.src} alt={item.image.alt} width="150" height="100"/>
            <header className={styles.itemHeader}>
                <h3>{item.title} ({item.count})</h3>
                <div className={styles.itemHeaderInfo}>
                    <Tag>{item.category.name}</Tag>
                    <span>{item.cost} руб.</span>
                </div>

                <span>{item.description}</span>
            </header>
            <footer className={styles.itemFooter}>
                <span className={styles.itemCost}>{item.cost * item.count} руб.</span>
                {action}
            </footer>
        </div>
    )
}

type CartListProps = {
    items: CartItem[];
    onDeleteItem?: (item: CartItem) => void;
}

export function CartList({items, onDeleteItem}: CartListProps) {

    const listTemplate = (items: CartItem[]) => {
        if (!items || items.length === 0) return 'Вы еще ничего не выбрали';
        return (
            <div className={styles.root}>
                {items.map(
                    (item: CartItem) => (
                        <CartListItem key={item.id}
                                      item={item}
                                      action={
                                          <Button severity="danger"
                                                  onClick={() => onDeleteItem?.(item)}
                                          >
                                              <i className="pi pi-trash"/>
                                          </Button>
                                      }/>
                    )
                )}
            </div>
        )
    };

    return <DataView value={items}
                     layout="list"
                     listTemplate={listTemplate}/>
}