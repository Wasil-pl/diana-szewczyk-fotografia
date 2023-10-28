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
          <p>Każda historia jest wyjątkowa.</p>
          <h2>
            Życie to nieustanna podróż, a każdy z nas ma swoją własną,
            niepowtarzalną opowieść do opowiedzenia.
          </h2>
          <p>
            Czasem zapominamy, jak ważne jest zatrzymywanie chwil, które
            stanowią tkankę naszego życia. Dzieci rosną tak szybko, że czasem
            trudno nadążyć za zmianami. Mogę pomóc Ci w uwiecznieniu tych
            drogocennych momentów w życiu Twojej rodziny, niezależnie od tego,
            czy jesteś wyczekującym, czy doświadczonym rodzicem chcącym
            upamiętnić piękne chwile codzienności swoich dzieci. Razem możemy
            stworzyć kapsułę czasu pełną wspomnień, które będą cieszyć serca
            Waszej rodziny przez lata.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default IntroductionSection;
