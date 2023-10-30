import React from 'react';
import styles from './MainMenu.module.scss';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { CaretDownFill } from 'react-bootstrap-icons';
import MainMenuLogin from './MainMenuLogin';
import ModalComponent from '../../ModalComponent/ModalComponent';
import { useDispatch, useSelector } from 'react-redux';
import { resetUserState } from '../../../../redux/users/userActions';
import {
  getLoggedState,
  getLoginSuccessState,
  getUserRole,
} from '../../../../redux/users/userSelectors';
import { modalMessages } from '../../../../consts/modalMessages';
import { logoutUserRequest } from '../../../../redux/users/userThunks';

export const MainMenu = ({ isFixed }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuClasses = isFixed ? styles.fixedMenu : styles.menuContainer;

  const isLogged = useSelector(getLoggedState);
  const loginSuccess = useSelector(getLoginSuccessState);
  const userRole = useSelector(getUserRole);
  const isAdmin = userRole === 'ADMIN';
  const isUser = userRole === 'USER';

  const handleCloseModal = () => {
    dispatch(resetUserState());
  };

  const handleLogout = () => {
    dispatch(logoutUserRequest());
    navigate('/');
  };

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
                <Link to={'/galeria/noworodki'}>
                  <li>Noworodki</li>
                </Link>
                <li>Niemowalki i dzieci starsze</li>
                <li>Ciążowe</li>
                <li>Rodzinne</li>
                <li>Kobiece</li>
              </ul>
            </li>

            <li className={styles.primaryMenu}>
              Oferta <CaretDownFill size={18} />
              <ul className={styles.subMenu}>
                <Link to={'/sesja-noworodkowa'}>
                  <li>Sesja noworodkowa</li>
                </Link>
                <li>Sesja dziecięca</li>
                <li>Sesja kobieca</li>
                <li>Sesja ciążowa</li>
                <li>Sesja ciążowa i noworodkowa</li>
                <li>Sesja rodzinna</li>
              </ul>
            </li>

            <li>Kontakt</li>

            {isUser && (
              <Link to={'/uzytkownik'}>
                <li>Twoje Zdjęcia</li>
              </Link>
            )}

            {isAdmin && (
              <li className={styles.primaryMenu}>
                Panel Administratora <CaretDownFill size={18} />
                <ul className={styles.subMenu}>
                  <Link to={'/wszyscy-uzytkownicy'}>
                    <li>Klienci</li>
                  </Link>
                  <Link to={'/rejestracja'}>
                    <li>Dodaj Klienta</li>
                  </Link>
                </ul>
              </li>
            )}

            {isLogged && <li onClick={handleLogout}>Logout</li>}

            {!isLogged && (
              <li className={styles.primaryMenu}>
                Login <CaretDownFill size={18} />
                <div className={styles.subMenu}>
                  <MainMenuLogin />
                </div>
              </li>
            )}
          </ul>
        </div>
      </Container>

      <ModalComponent
        show={loginSuccess}
        onClose={handleCloseModal}
        headerText={modalMessages.loginSuccess.headerText}
        textMessage={modalMessages.loginSuccess.textMessage}
      />
    </div>
  );
};
