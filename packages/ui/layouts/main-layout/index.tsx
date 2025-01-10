import {ReactNode} from 'react';
import {Outlet} from 'react-router-dom';
import {classNames} from 'primereact/utils';

import styles from './styles.module.css';

export type MainLayoutProps = {
    headerStart?: ReactNode;
    headerEnd?: ReactNode;
    navigation?: ReactNode;
}

export function MainLayout({headerStart, headerEnd, navigation}: MainLayoutProps) {
    return (
        <div className={classNames(styles.root, navigation && styles.rootWithNavigation)}>
            {(headerStart || headerEnd) && (
                <header className={styles.header}>
                    {headerStart && headerStart}

                    {headerEnd && (
                        <div className={styles.headerActions}>
                            {headerEnd}
                        </div>
                    )}
                </header>
            )}

            {navigation && <div className={styles.navigation}>{navigation}</div>}

            <main className={styles.content}>
                <Outlet/>
            </main>
        </div>
    )
}