import { ReactNode } from 'react';
import { Tag } from 'primereact/tag';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';

import { Meal } from '../../types';

import styles from './styles.module.css';

type MealCardProps = {
  meal: Meal;
  footer?: ReactNode;
}

export function MealCard({ meal, footer }: MealCardProps) {

  return (
    <Card className={styles.root}
          title={
            <h3 className={styles.title}>{meal.title}</h3>

          }
          subTitle={
            <div className={styles.subTitleContainer}>
              <Tag>{meal.category.name}</Tag>
              <span>{meal.cost} руб.</span>
            </div>
          }
          header={
            <header>
              <Image
                imageClassName={styles.image}
                height="300px"
                src={meal.image.src}
                alt={meal.image.alt}
              />
            </header>
          }
          footer={
            <footer className={styles.footer}>
              {footer}
            </footer>
          }
    >
      <p>{meal.description}</p>
    </Card>
  );
}