import React from 'react';
import styles from './styles.module.css';

export default function IconText({ Icon, children }) {
  return (
    <span className={styles.container}>
      {Icon && <Icon className={styles.icon} />}
      <span>{children}</span>
    </span>
  );
}
