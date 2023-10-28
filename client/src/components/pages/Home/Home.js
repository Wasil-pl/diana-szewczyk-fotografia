import React from 'react';
import IntroductionSection from '../../layout/IntroductionSection/IntroductionSection';
import Portfolio from '../../features/Portfolio/Portfolio';
import MyOffer from '../../features/MyOffer/MyOffer';
import { HeroSection } from '../../features/HeroSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <IntroductionSection />
      <Portfolio />
      <MyOffer />
    </div>
  );
};

export default Home;
