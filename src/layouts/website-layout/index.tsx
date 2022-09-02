import React from 'react';
import { Header, Footer } from '../../ui.components';
import styles from './website-layout.module.scss'

const WebsiteLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div className='main'>
        {children}
      </div>
      <Footer />
    </>
  )
}


export default WebsiteLayout;