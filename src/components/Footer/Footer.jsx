import React from 'react';
import FooterNavBar from '../footerNavBar/FooterNavBar';
import Contacts from './contacts/Contacts';
import styles from './Footer.module.css';
import FooterCopyRight from './footerCopyRight/FooterCopyRight';

const Footer = () => {
  return (
    <div className={styles.container}>
      <Contacts />
      <FooterNavBar />
      <FooterCopyRight />
    </div>
  );
};

export default Footer;
