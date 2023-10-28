import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './SessionPrice.module.scss';

const SessionPrice = ({ content, variant = '', price }) => {
  return (
    <div className={`${styles.section} ${styles[variant]}`}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h1>Cennik</h1>
            <h2>{price} zł</h2>
            <p>
              {content.map((paragraph) => (
                <p>{paragraph}</p>
              ))}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SessionPrice;
