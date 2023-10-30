import React, { useState } from 'react';
import styles from './SingleUserForm.module.scss';
import { IMAGES_URL } from '../../../../config';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { PACKAGE } from '../../../../consts/constants';

const SingleUserForm = ({ user, action }) => {
  const { handleSubmit, register } = useForm();
  const [countCheckings, setCountCheckings] = useState(0);

  const packageNumber = PACKAGE[user.package];

  const onSubmitCallback = (data) => {
    const transformedData = Object.entries(data).map(([id, checkBox]) => ({
      id,
      checkBox,
    }));

    action(transformedData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h2>Ważne Informacje dotyczące Wyboru Zdjęć</h2>
        <p>
          Zasady wyboru zdjęć do obróbki i druku są proste i elastyczne. Możesz
          wybrać swoje zdjęcia w zależności od wybranego pakietu, ale pamiętaj,
          że wybór jest jednorazowy, więc rozważ go dokładnie. Liczba zdjęć w
          Twoim wyborze jest ograniczona do ustalonej ilości, ale jeśli zechcesz
          wybrać więcej, możesz to zrobić za dodatkową opłatą. Dlatego warto
          przemyśleć swoje wybory i wybrać te fotografie, które są dla Ciebie
          najważniejsze. Dziękujemy za zaufanie i serdecznie pozdrawiamy!
        </p>
      </div>
      <Form
        onSubmit={handleSubmit(onSubmitCallback)}
        className={styles.formWrapper}
      >
        {user.pictures.map((item) => (
          <div className={styles.box} key={item.id}>
            <div className={styles.imageBox} key={item.id}>
              <img
                src={IMAGES_URL + item.name}
                alt={item.name}
                className={styles.image}
              />
            </div>
            <div className={styles.form}>
              <Form.Check
                {...register(item.id)}
                type="checkBox"
                label="Wybierz"
                onChange={(e) => {
                  if (e.target.checked) {
                    setCountCheckings(countCheckings + 1);
                  } else {
                    setCountCheckings(countCheckings - 1);
                  }
                }}
              />
            </div>
          </div>
        ))}
        <div className={styles.info}>
          <p>Możesz wybrać {packageNumber} zdjęć</p>
          {countCheckings > packageNumber && (
            <p>każde następne będzie dodatkowo płatne</p>
          )}
          <p>Wybrano {countCheckings}</p>
        </div>
        <Button
          className={styles.confirmButton}
          type="submit"
          variant="primary"
        >
          potwierdź wybór
        </Button>
      </Form>
    </div>
  );
};

export default SingleUserForm;
