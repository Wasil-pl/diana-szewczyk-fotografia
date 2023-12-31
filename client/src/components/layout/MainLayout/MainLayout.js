import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateViewportMode } from '../../../redux/screenSizeRedux';
import { HeroSection } from '../../features/HeroSection/index';
import { MainMenu } from '../../features/HeroSection/components/MainMenu';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      const mode =
        windowWidth >= 1200
          ? 'bigDesktop'
          : windowWidth >= 992
          ? 'desktop'
          : windowWidth >= 576
          ? 'tablet'
          : windowWidth >= 468
          ? 'mobile'
          : 'small-mobile';
      dispatch(updateViewportMode(mode));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch, windowWidth]);

  return (
    <div>
      <MainMenu />
      {children}
      <Contact />
      <Footer />
    </div>
  );
};

export default MainLayout;
