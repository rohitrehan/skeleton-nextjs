import React from 'react';
import styles from "./footer.module.scss";
import Link from 'next/link';
import { organization } from '../../constants';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTitle}>
        {organization.registeredName}
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.links}>
          <Link href="/privacy-policy" rel="nofollow">
            Privacy Policy
          </Link>
        </div>
        <div className={styles.links} >
          <Link href="/cookie-policy" rel="nofollow">
            Cookie Policy
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="/legal-notice" rel="nofollow">
            Legal Notice
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="/tnc" rel="nofollow">
            Terms and Conditions
          </Link>
        </div>
      </div>
      <hr />
      <div className={styles.footerSocial}>
        <div className={styles.copyrightText}>© {new Date().getFullYear()} {organization.registeredName} All rights reserved</div>
      </div>
    </div>
  )
}