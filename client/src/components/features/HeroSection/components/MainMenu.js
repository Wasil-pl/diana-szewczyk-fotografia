import React from 'react';
import styles from './MainMenu.module.scss';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CaretDownFill } from 'react-bootstrap-icons';
import MainMenuLogin from './MainMenuLogin';

export const MainMenu = ({ isFixed }) => {
  const menuClasses = isFixed ? styles.fixedMenu : styles.menuContainer;

  return (
    <div className={menuClasses}>
      <Container className={styles.menu}>
        <div className={styles.menu}>
          <div className={styles.logo}>
            <Link to={'/'}>
              <img
                src={`${process.env.PUBLIC_URL}/images/logo-ds.png`}
                alt="logo"
              />
            </Link>
          </div>

          <ul className={styles.menuInside}>
            <li className={styles.primaryMenu}>
              Portfolio <CaretDownFill size={18} />
              <ul className={styles.subMenu}>
                <li>Noworodki</li>
                <li>Niemowalki i dzieci starsze</li>
                <li>Ciążowe</li>
                <li>Rodzinne</li>
                <li>Kobiece</li>
              </ul>
            </li>

            <li className={styles.primaryMenu}>
              Oferta <CaretDownFill size={18} />
              <ul className={styles.subMenu}>
                <li>Sesja noworodkowa</li>
                <li>Sesja dziecięca</li>
                <li>Sesja kobieca</li>
                <li>Sesja ciążowa</li>
                <li>Sesja ciążowa i noworodkowa</li>
                <li>Sesja rodzinna</li>
              </ul>
            </li>

            <li>Kontakt</li>

            <li>Twoje Zdjęcia</li>

            <li>Panel Administratora</li>

            <li className={styles.primaryMenu}>
              Login <CaretDownFill size={18} />
              <div className={styles.subMenu}>
                <MainMenuLogin />
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
