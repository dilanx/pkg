import React from 'react';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import styles from './styles.module.css';

export default function BlogPostItemHeader() {
  return (
    <header>
      <BlogPostItemHeaderTitle className={styles.headerTitle} />
      <BlogPostItemHeaderInfo />
      <BlogPostItemHeaderAuthors className={styles.headerAuthors} />
    </header>
  );
}
