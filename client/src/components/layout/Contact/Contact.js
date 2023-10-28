import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Contact.module.scss';
import { Instagram, Facebook } from 'react-bootstrap-icons';

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.box}>
          <div className={styles.logo}>
            <img
              alt="logo"
              src={process.env.PUBLIC_URL + 'images/logo-white-ds.png'}
            />
          </div>
          <div className={styles.contact}>
            <h2>Kontakt</h2>
            <p>info@dianaszewczyk.pl</p>
            <p>+48 504 907 408</p>
            <p>Jastrzębie-Zdrój, ul. Łokietka 14</p>
          </div>
          <div className={styles.socialLinks}>
            <h2>Social Links</h2>
            <div>
              <Facebook />
              <Instagram />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
