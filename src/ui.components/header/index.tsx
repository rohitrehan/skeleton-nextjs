import React from "react";
import styles from './header.module.scss';
import Link from "next/link";
import { organization } from '../../constants';

export default function Header({ children }: { children?: any }) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <Link href="/">
          {organization.shortName}
        </Link>
      </div>
      {children}
    </div>
  )
}