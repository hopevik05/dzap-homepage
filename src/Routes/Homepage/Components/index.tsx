import React from 'react';
import Ecosystems from '../Sections/Ecosystems';
import Features from '../Sections/Features';
import Hero from '../Sections/Hero';
import Stats from '../Sections/Stats';
import SupportedChains from '../Sections/SupportedChains';

function HomepageComponents() {
  return (
    <>
      <Hero />
      <SupportedChains />
      <Features />
      <Stats />
      <Ecosystems />
      {/* <Investors /> */}
    </>
  );
}
export default React.memo(HomepageComponents);
