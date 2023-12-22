import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';
export default function BlogPostItemHeaderTitle({ className }) {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { permalink, title } = metadata;
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
  return (
    <div>
      {isBlogPostPage ? (
        <img
          src={`/img${permalink}/preview.jpg`}
          alt="item preview"
          className={styles.preview}
        />
      ) : (
        <Link itemProp="url" to={permalink}>
          <img
            src={`/img${permalink}/preview.jpg`}
            alt="item preview"
            className={styles.preview}
          />
        </Link>
      )}
      <TitleHeading
        className={clsx(styles.title, className)}
        itemProp="headline"
      >
        {isBlogPostPage ? (
          title
        ) : (
          <Link itemProp="url" to={permalink}>
            {title}
            <ChevronRightIcon className="d-arrow" />
          </Link>
        )}
      </TitleHeading>
    </div>
  );
}
