import React from 'react';
import styles from './ELine.module.css';

export default function ELine({ name, value, fade }) {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>{name}</p>
      <p className={`${styles.text}${fade ? ` ${styles.fade}` : ''}`}>
        {value}
      </p>
    </div>
  );
}
