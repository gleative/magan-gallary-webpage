import React from 'react';
import { MainSection } from './mainSection/mainSection';
import { Section } from './section/section';
import { Footer } from '../footer/footer';

export const Home: React.FC = () => {
  return (
    <>
      <MainSection sectionHeight={100} />
      <Section></Section>
      <Footer></Footer>
    </>
  );
};
