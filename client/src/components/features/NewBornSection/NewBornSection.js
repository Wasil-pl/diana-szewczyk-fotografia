import React from 'react';
import { HeroSection } from '../HeroSection';
import SessionInfo from '../../layout/SessionInfo/SessionInfo';
import SessionPrepareGuid from '../../layout/SessionPrepareGuid/SessionPrepareGuid';
import SessionPrice from '../../layout/SessionPrice/SessionPrice';
import { TEXT_CONTENT } from '../../../consts/sessionInfo';

const NewBornSection = () => {
  return (
    <div>
      <HeroSection variant={'newBorn'} />
      <SessionInfo
        image1={TEXT_CONTENT.newBorn.image1}
        image2={TEXT_CONTENT.newBorn.image2}
        content={TEXT_CONTENT.newBorn.text}
      />
      <SessionPrepareGuid
        content={TEXT_CONTENT.newBorn.infoAboutSession}
        image={TEXT_CONTENT.newBorn.image3}
      />
      <SessionPrice
        price={TEXT_CONTENT.newBorn.price}
        content={TEXT_CONTENT.newBorn.infoPrice}
        variant={'newBorn'}
      />
    </div>
  );
};

export default NewBornSection;
