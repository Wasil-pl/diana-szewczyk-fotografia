import React, { useEffect, useState } from 'react';
import styles from './HeroSection.module.scss';
import { Container } from 'react-bootstrap';
import { MainMenu } from './MainMenu.js';
import clsx from 'clsx';

export const HeroSection = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  }, []);

  return (
    <>
      <MainMenu />
      <Container>
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
    </>
  );
};
