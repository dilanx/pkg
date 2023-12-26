import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';
export default function BlogSidebarDesktop({ sidebar }) {
    return (
        <nav
            className="thin-scrollbar"
            aria-label={translate({
                id: 'theme.blog.sidebar.navAriaLabel',
                message: 'Blog recent posts navigation',
                description:
                    'The ARIA label for recent posts in the blog sidebar',
            })}
        >
            <div className={clsx(styles.sidebarItemTitle)}>{sidebar.title}</div>
            <ul className={clsx(styles.sidebarItemList, 'clean-list')}>
                {sidebar.items.map((item) => (
                    <li key={item.permalink} className={styles.sidebarItem}>
                        <Link
                            isNavLink
                            to={item.permalink}
                            className={styles.sidebarItemLink}
                            activeClassName={styles.sidebarItemLinkActive}
                        >
                            <img
                                src={`/img${item.permalink}/preview.jpg`}
                                alt="sidebar item preview"
                                className={styles.sidebarItemPreview}
                            />
                            <p className={styles.sidebarItemText}>
                                {item.title}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
