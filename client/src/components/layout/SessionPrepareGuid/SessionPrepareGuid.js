import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './SessionPrepareGuid.module.scss';
import Heading from '../../features/Heading/Heading';

const SessionPrepareGuid = ({ content, image }) => {
  return (
    <div className={styles.section}>
      <Container className={styles.container}>
        <Heading text={'Jak się przygotować'} />
        <div className={styles.wrapper}>
          <div className={styles.info}>
            {content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className={styles.images}>
            <img alt={'noworodek'} src={process.env.PUBLIC_URL + image} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SessionPrepareGuid;
