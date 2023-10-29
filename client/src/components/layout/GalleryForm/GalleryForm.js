import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './GalleryForm.module.scss';

const GalleryForm = ({ galleryLinks }) => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.gallery}>
          {galleryLinks.map((link) => (
            <div key={link} className={styles.galleryItem}>
              <img alt={'noworodek'} src={process.env.PUBLIC_URL + link} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default GalleryForm;
