import { translate } from '@docusaurus/Translate';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import PaginatorNavLink from '@theme/PaginatorNavLink';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

export default function BlogPostPaginator(props) {
  const { nextItem, prevItem } = props;
  return (
    <nav
      className="pagination-nav docusaurus-mt-lg"
      aria-label={translate({
        id: 'theme.blog.post.paginator.navAriaLabel',
        message: 'Blog post page navigation',
        description: 'The ARIA label for the blog posts pagination',
      })}
    >
      {prevItem && (
        <PaginatorNavLink
          {...prevItem}
          subLabel={
            <div className={clsx(styles.paginationSublabel, styles.left)}>
              <ArrowLeftIcon className="d-arrow" />
              Newer Post
            </div>
          }
        />
      )}
      {nextItem && (
        <PaginatorNavLink
          {...nextItem}
          subLabel={
            <div className={clsx(styles.paginationSublabel, styles.right)}>
              Older Post
              <ArrowRightIcon className="d-arrow" />
            </div>
          }
          isNext
        />
      )}
    </nav>
  );
}
