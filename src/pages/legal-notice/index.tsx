import React from 'react';
import styles from './legal-notice.module.scss';
import { organization } from '../../constants';
import { WebsiteLayout } from '../../layouts';

export default function LegalNotice() {
  return (
    <WebsiteLayout>
      <main className={styles.legalTextContainer}>
        <h1>Legal Notice</h1>
        <p>{organization.registeredName} is registered in {organization.address.country}
            {organization.VAT && <>VAT: {organization.VAT}</>}
            {organization.GSTIN && <>GSTIN: {organization.GSTIN}</>}.
        </p>
        <p>The company&apos;s contact information is:</p>
        <h2>{organization.registeredName}</h2>
        <p>{organization.address.street}</p><br />
        {organization.address.state}, {organization.address.pin}<br />
        {organization.address.country}<br />
        <p>{organization.website}</p>
        <p>Tax ID No. 3471808LH</p>
      </main>
    </WebsiteLayout>
  )
}
