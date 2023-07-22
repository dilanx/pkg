import Logo from '@theme/Logo';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

export default function NavbarLogo() {
  return (
    <Logo
      className={clsx('navbar__brand', styles.logo)}
      imageClassName="navbar__logo"
      titleClassName="navbar__title text--truncate"
    />
  );
}
