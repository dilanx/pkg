import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';
import styles from './styles.module.css';

export default function BlogLayout(props) {
  const { sidebar, toc, children, ...layoutProps } = props;
  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          <main
            className="col col--9"
            itemScope
            itemType="http://schema.org/Blog"
          >
            {children}
          </main>
          <aside className={clsx('col', 'col--3', styles.aside)}>
            {toc && <div className={styles.toc}>{toc}</div>}
            <BlogSidebar sidebar={sidebar} />
          </aside>
        </div>
      </div>
    </Layout>
  );
}
