import React from 'react';
import IntroductionSection from '../../layout/IntroductionSection/IntroductionSection';
import Portfolio from '../../features/Portfolio/Portfolio';
import MyOffer from '../../features/MyOffer/MyOffer';

const Home = () => {
  return (
    <div>
      <IntroductionSection />
      <Portfolio />
      <MyOffer />
    </div>
  );
};

export default Home;
