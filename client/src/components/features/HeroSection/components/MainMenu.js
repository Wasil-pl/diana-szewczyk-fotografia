import React from 'react';
import styles from './MainMenu.module.scss';
import { Container } from 'react-bootstrap';

export const MainMenu = () => {
  return (
    <div className={styles.menuContainer}>
      <Container className={styles.menu}>
        <h2>MainMenu</h2>
      </Container>
    </div>
  );
};
