import React from 'react';
import styles from './SelectedPicturesForm.module.scss';
import { IMAGES_URL } from '../../../../config';
import { PACKAGE } from '../../../../consts/constants';

const SelectedPicturesForm = ({ user }) => {
  const selectedPictures = user.pictures.filter(
    (item) => item.checkBox === true,
  );

  const packageNumber = PACKAGE[user.package];
  const selectedPicturesNumber = selectedPictures.length;

  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h2>Zdjęcia wybrane przez użytkownika</h2>
        <p>
          wybrany pakiet: <strong>{packageNumber}</strong>
        </p>
        <p>
          liczba zdjęć wybranych przez użytkownika:{' '}
          <strong>{selectedPicturesNumber}</strong>
        </p>
      </div>
      <div className={styles.formWrapper}>
        {selectedPictures.map((item) => (
          <div className={styles.box} key={item.id}>
            <div className={styles.imageBox} key={item.id}>
              <img
                src={IMAGES_URL + item.name}
                alt={item.name}
                className={styles.image}
              />
            </div>
            <div className={styles.info}>
              <p className={styles.text}>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedPicturesForm;
