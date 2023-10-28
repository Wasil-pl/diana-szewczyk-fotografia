import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './SessionInfo.module.scss';
import Heading from '../../features/Heading/Heading';
import { TEXT_CONTENT } from '../../../consts/sessionInfo';

const SessionInfo = ({ image1, image2, content }) => {
  return (
    <div className={styles.section}>
      <Container className={styles.container}>
        <Heading text={'o sesji'} />
        <div className={styles.wrapper}>
          <div className={styles.images}>
            <img alt={'noworodek'} src={process.env.PUBLIC_URL + image1} />
            <img
              className={styles.image2}
              alt={'noworodek'}
              src={process.env.PUBLIC_URL + image2}
            />
          </div>
          <div className={styles.info}>
            <h2>{TEXT_CONTENT.newBorn.title}</h2>
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

export default SessionInfo;
