import { ReactNode } from 'react';
import { Tag } from 'primereact/tag';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';

import type { Dish } from '../../model/dish';

import styles from './styles.module.css';

type MealCardProps = {
  dish: Dish;
  footer?: ReactNode;
}

export function DishCard({ dish, footer }: MealCardProps) {

  return (
    <Card className={styles.root}
          title={
            <h3 className={styles.title}>{dish.title}</h3>

          }
          subTitle={
            <div className={styles.subTitleContainer}>
              <Tag>{dish.category.name}</Tag>
              <span>{dish.cost} руб.</span>
            </div>
          }
          header={
            <header>
              <Image
                imageClassName={styles.image}
                height="300px"
                src={dish.image.src}
                alt={dish.image.alt}
              />
            </header>
          }
          footer={
            <footer className={styles.footer}>
              {footer}
            </footer>
          }
    >
      <p>{dish.description}</p>
    </Card>
  );
}