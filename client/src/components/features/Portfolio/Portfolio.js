import React from 'react';
import styles from './Portfolio.module.scss';
import { Container } from 'react-bootstrap';
import Heading from '../Heading/Heading';

const Portfolio = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Heading text={'Portfolio'} />
        <div className={styles.categories}>
          <div className={styles.galleryOne}>
            <img
              alt={'noworodek'}
              src={process.env.PUBLIC_URL + 'images/portfolio/noworodek.jfif'}
            />
            <div className={styles.text}>
              <h2>noworodki</h2>
            </div>
          </div>
          <div className={styles.galleryTwo}>
            <img
              alt={'dziecko'}
              src={
                process.env.PUBLIC_URL + 'images/portfolio/dzieciStarsze.jfif'
              }
            />
            <div className={styles.text}>
              <h2>Niemowlaki i dzieci starsze</h2>
            </div>
          </div>
          <div className={styles.galleryThree}>
            <img
              alt={'kobieta w ciązy'}
              src={process.env.PUBLIC_URL + 'images/portfolio/ciążowe.jfif'}
            />
            <div className={styles.text}>
              <h2>ciążowe</h2>
            </div>
          </div>
          <div className={styles.galleryFour}>
            <img
              alt={'rodzina'}
              src={process.env.PUBLIC_URL + 'images/portfolio/rodzinne.jfif'}
            />
            <div className={styles.text}>
              <h2>rodzinne</h2>
            </div>
          </div>
          <div className={styles.galleryFive}>
            <img
              alt={'kobieta'}
              src={process.env.PUBLIC_URL + 'images/portfolio/kobiece.jfif'}
            />
            <div className={styles.text}>
              <h2>kobiece</h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
