import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './MyOffer.module.scss';
import Heading from '../Heading/Heading';

const MyOffer = () => {
  return (
    <div className={styles.section}>
      <Container className={styles.container}>
        <Heading text={'Oferta'} />
        <div className={styles.wrapper}>
          <div className={`${styles.item} ${styles.rightSide}`}>
            <img
              alt={'noworodek'}
              src={process.env.PUBLIC_URL + 'images/offer/noworodek.jfif'}
            />
            <div className={styles.infoRightSide}>
              <h2>sesja noworodkowa</h2>
              <p>
                Sesja noworodkowa to jedna z najpiękniejszych pamiątek, jakie
                możesz stworzyć dla swojego dziecka. To niepowtarzalna okazja do
                uwiecznienia pierwszych dni życia maluszka, które tak szybko
                mijają. Warto więc zatrzymać je na dłużej, by móc do nich
                powracać w przyszłości.
              </p>
            </div>
          </div>
          <div className={`${styles.item} ${styles.leftSide}`}>
            <img
              alt={'dziecko'}
              src={process.env.PUBLIC_URL + 'images/offer/dziecko.jfif'}
            />
            <div className={styles.infoLeftSide}></div>
          </div>
          <div className={`${styles.item} ${styles.rightSide}`}>
            <img
              alt={'kobieta'}
              src={process.env.PUBLIC_URL + 'images/offer/kobieta.jfif'}
            />
            <div className={styles.infoRightSide}></div>
          </div>
          <div className={`${styles.item} ${styles.leftSide}`}>
            <img
              alt={'kobieta w ciązy'}
              src={process.env.PUBLIC_URL + 'images/offer/kobietaWciąży.jfif'}
            />
            <div className={styles.infoLeftSide}></div>
          </div>
          <div className={`${styles.item} ${styles.rightSide}`}>
            <img
              alt={'kobieta w ciązy'}
              src={
                process.env.PUBLIC_URL +
                'images/offer/oferta-sesja-ciazowa-noworodkowa.jpg'
              }
            />
            <div className={styles.infoRightSide}></div>
          </div>
          <div className={`${styles.item} ${styles.leftSide}`}>
            <img
              alt={'rodzina'}
              src={
                process.env.PUBLIC_URL +
                'images/offer/oferta-sesja-rodzinna.jpg'
              }
            />
            <div className={styles.infoLeftSide}></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyOffer;
