import React, { useEffect, useState } from 'react';
import styles from './HeroSection.module.scss';
import { Container } from 'react-bootstrap';
import clsx from 'clsx';

export const HeroSection = ({ variant = '' }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 200);
  }, []);

  return (
    <div className={clsx(variant === '' ? styles.wrapper : styles[variant])}>
      <Container className={styles.container}>
        <div className={styles.heroSection}>
          <div className={styles.firstColumn}>
            <div className={styles.emptyBox}></div>
            <div className={styles.emptyBox2}></div>
            <div className={clsx(styles.textBox, fadeIn && styles.fadeIn)}>
              <div className={styles.title}>Moja pasja...</div>
            </div>
          </div>
          <div className={styles.secondColumn}>
            <div className={styles.emptyBox}></div>
            <div className={styles.emptyBox}></div>
          </div>
          <div className={styles.thirdColumn}>
            <div className={clsx(styles.textBox, fadeIn && styles.fadeIn)}>
              <div className={styles.title}>
                Twoje
                <br /> chwile,
                <br /> twoje
                <br /> wspomnienia.
              </div>
            </div>
            <div className={styles.emptyBox}></div>
            <div className={styles.emptyBox2}></div>
          </div>
        </div>
      </Container>
    </div>
  );
};
