import React from 'react';
import styles from './Categories.module.scss';
import { Container } from 'react-bootstrap';

const Categories = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.heading}>
          <h1>Galerie</h1>
        </div>
        <div className={styles.categories}>
          <div className={styles.categoryOne}>
            <img
              alt={'sesjaKobieca'}
              src={
                process.env.PUBLIC_URL + 'images/categories/sesjaKobieca.jpeg'
              }
            />
            <div className={styles.text}>
              <h2>Sesja kobieca</h2>
            </div>
          </div>
          <div className={styles.categoryTwo}>
            <img
              alt={'sesjaCiążowa'}
              src={
                process.env.PUBLIC_URL + 'images/categories/sesjaCiążowa.jpeg'
              }
            />
            <div className={styles.text}>
              <h2>Sesja ciążowa</h2>
            </div>
          </div>
          <div className={styles.categoryThree}>
            <img
              alt={'sesjaRodzinna'}
              src={
                process.env.PUBLIC_URL + 'images/categories/sesjaRodzinna.jpeg'
              }
            />
            <div className={styles.text}>
              <h2>Sesja rodzinna</h2>
            </div>
          </div>
          <div className={styles.categoryFour}>
            <img
              alt={'sesjaDziecięca'}
              src={
                process.env.PUBLIC_URL +
                'images/categories/sesjaNoworodkowa.jfif'
              }
            />
            <div className={styles.text}>
              <h2>Sesja dziecięca</h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
