import React from 'react';
import styles from './MainMenu.module.scss';
import { Container } from 'react-bootstrap';

export const MainMenu = ({ isFixed }) => {
  const menuClasses = isFixed ? styles.fixedMenu : styles.menuContainer;

  return (
    <div className={menuClasses}>
      <Container className={styles.menu}>
        <h2>MainMenu</h2>
      </Container>
    </div>
  );
};
