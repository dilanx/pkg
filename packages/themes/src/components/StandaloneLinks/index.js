import React from 'react';
import styles from './styles.module.css';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export default function StandaloneLinks({ links }) {
  return (
    <div className={styles.container}>
      {links?.map(({ href, newTab, label }) => (
        <a
          key={label}
          className={styles.link}
          href={href}
          target={newTab ? '_blank' : '_self'}
          rel={newTab ? 'noreferrer' : undefined}
        >
          <span>{label}</span>
          <ChevronRightIcon className={styles.icon} />
        </a>
      ))}
    </div>
  );
}
