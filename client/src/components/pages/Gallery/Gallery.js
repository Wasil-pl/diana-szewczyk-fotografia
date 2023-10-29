import React from 'react';
import { HeroSection } from '../../features/HeroSection';
import { useParams } from 'react-router-dom';
import { GALLERY_LINKS } from '../../../consts/galleryLinks';
import GalleryForm from '../../layout/GalleryForm/GalleryForm';

const Gallery = () => {
  const { category } = useParams();

  let galleryData = {
    heroSectionVariant: '',
    galleryLinks: [],
  };

  switch (category) {
    case 'noworodki':
      galleryData.heroSectionVariant = 'newBorn-gallery';
      galleryData.galleryLinks = GALLERY_LINKS.newBorn;
      break;
    default:
      galleryData.heroSectionVariant = 'newBorn-gallery';
      galleryData.galleryLinks = GALLERY_LINKS.newBorn;
      break;
  }

  return (
    <div>
      <HeroSection variant={galleryData.heroSectionVariant} />
      <GalleryForm galleryLinks={galleryData.galleryLinks} />
    </div>
  );
};

export default Gallery;
