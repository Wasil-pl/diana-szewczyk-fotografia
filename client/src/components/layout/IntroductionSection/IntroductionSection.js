import React from 'react';
import styles from './IntroductionSection.module.scss';
import { Container } from 'react-bootstrap';

const IntroductionSection = () => {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.image}>
          <img
            alt={'dziecko'}
            src={process.env.PUBLIC_URL + 'images/introduction/1.jfif'}
          />
        </div>
        <div className={styles.text}>
          <p>Kreowanie historii nowego życia, rodziny i macierzyństwa.</p>
          <h2>
            Dokumentowanie wspólnych chwil, czułości i magicznych wspomnień z
            dzieciństwa.
          </h2>
          <p>
            Nasze dzieci zmieniają się tak szybko, a obserwowanie ich dorastania
            przez lata dzieciństwa może sprawiać wrażenie, jakby piasek
            przesuwał się między naszymi palcami. Mogę pomóc ci w zatrzymaniu
            tego rozdziału w życiu twojej rodziny, niezależnie od tego, czy
            oczekujesz swojego pierwszego dziecka, powiększasz rodzinę czy
            chcesz udokumentować radosne chwile codzienności w życiu swoich
            dzieci - trochę jak wręczanie im kapsuły czasu do otwarcia w
            przyszłości.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default IntroductionSection;
