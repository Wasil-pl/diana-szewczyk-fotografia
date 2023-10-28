import React from 'react';
import { Button, Container } from 'react-bootstrap';
import styles from './MyOffer.module.scss';
import Heading from '../Heading/Heading';
import { useNavigate } from 'react-router-dom';

const MyOffer = () => {
  const navigate = useNavigate();

  const handlesubmit = (url) => {
    navigate(`/${url}`);
  };

  return (
    <div className={styles.section}>
      <Container className={styles.container}>
        <Heading text={'Oferta'} />
        <div className={styles.wrapper}>
          <div className={`${styles.item} ${styles.rightSide}`}>
            <img
              alt={'noworodek'}
              src={process.env.PUBLIC_URL + 'images/offer/noworodek.jfif'}
            />
            <div className={styles.infoRightSide}>
              <h2>sesja noworodkowa</h2>
              <p>
                Sesja noworodkowa to jedna z najpiękniejszych pamiątek, jakie
                możesz stworzyć dla swojego dziecka. To niepowtarzalna okazja do
                uwiecznienia pierwszych dni życia maluszka, które tak szybko
                mijają. Warto więc zatrzymać je na dłużej, by móc do nich
                powracać w przyszłości.
              </p>
              <Button
                onClick={() => handlesubmit('sesja-noworodkowa')}
                variant="outline-secondary"
                size="lg"
              >
                dowiedz się więcej
              </Button>
            </div>
          </div>
          <div className={`${styles.item} ${styles.leftSide}`}>
            <img
              alt={'dziecko'}
              src={process.env.PUBLIC_URL + 'images/offer/dziecko.jfif'}
            />
            <div className={styles.infoLeftSide}>
              <h2>sesja dziecięca</h2>
              <p>
                Sesja dziecięca to niezapomniana przygoda, która dostarczy
                mnóstwo radości i uśmiechu. To także niepowtarzalna okazja do
                uwiecznienia najpiękniejszych chwil z życia Twojego dziecka.
                Sesja dziecięca to także świetny pomysł na prezent dla bliskich.
              </p>
              <Button variant="outline-secondary" size="lg">
                dowiedz się więcej
              </Button>
            </div>
          </div>
          <div className={`${styles.item} ${styles.rightSide}`}>
            <img
              alt={'kobieta'}
              src={process.env.PUBLIC_URL + 'images/offer/kobieta.jfif'}
            />
            <div className={styles.infoRightSide}>
              <h2>sesja kobieca</h2>
              <p>
                Sesja kobieca to czas tylko dla Ciebie. To chwila, aby poczuć
                się piękną i pewną siebie. Razem stworzymy magiczne ujęcia
                podkreślające Twoją wyjątkowość.
              </p>
              <Button variant="outline-secondary" size="lg">
                dowiedz się więcej
              </Button>
            </div>
          </div>
          <div className={`${styles.item} ${styles.leftSide}`}>
            <img
              alt={'kobieta w ciązy'}
              src={process.env.PUBLIC_URL + 'images/offer/kobietaWciąży.jfif'}
            />
            <div className={styles.infoLeftSide}>
              <h2>sesja ciążowa (studio lub plener)</h2>
              <p>
                Sesja ciążowa to wyjątkowy moment w oczekiwaniu na przyjście
                Twojego dziecka. Możesz wybrać sesję w komfortowym studio lub w
                malowniczym plenerze - decyzja należy do Ciebie.
              </p>
              <Button variant="outline-secondary" size="lg">
                dowiedz się więcej
              </Button>
            </div>
          </div>
          <div className={`${styles.item} ${styles.rightSide}`}>
            <img
              alt={'kobieta w ciązy'}
              src={
                process.env.PUBLIC_URL +
                'images/offer/oferta-sesja-ciazowa-noworodkowa.jpg'
              }
            />
            <div className={styles.infoRightSide}>
              <h2>sesja ciążowa i noworodkowa</h2>
              <p>
                Kombinacja sesji ciążowej i noworodkowej to sposób na
                uwiecznienie dwóch niesamowitych momentów w życiu rodziny.
                Przygotujemy dla Ciebie wyjątkową opowieść od oczekiwania na
                przyjście dziecka aż po pierwsze dni życia maluszka.
              </p>
              <Button variant="outline-secondary" size="lg">
                dowiedz się więcej
              </Button>
            </div>
          </div>
          <div className={`${styles.item} ${styles.leftSide}`}>
            <img
              alt={'rodzina'}
              src={
                process.env.PUBLIC_URL +
                'images/offer/oferta-sesja-rodzinna.jpg'
              }
            />
            <div className={styles.infoLeftSide}>
              <h2>sesja rodzinna w plenerze</h2>
              <p>
                Sesja rodzinna w plenerze to okazja do stworzenia pięknych chwil
                razem z najbliższymi. Spędźcie czas na świeżym powietrzu i
                utrwalcie swoje więzi w niezapomniany sposób.
              </p>
              <Button variant="outline-secondary" size="lg">
                dowiedz się więcej
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyOffer;
