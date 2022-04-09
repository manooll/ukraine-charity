import React, { Suspense, lazy } from 'react';
import {
  Header,
  Footer,
} from './blocks';

const Banner = lazy(() => import('./blocks/banner'));
const Video = lazy(() => import('./blocks/video'));
const War = lazy(() => import('./blocks/war'));
const Approach = lazy(() => import('./blocks/approach'));
const Help = lazy(() => import('./blocks/help'));
const WhyUs = lazy(() => import('./blocks/why-us'));
const Timing = lazy(() => import('./blocks/timing'));
const Donation = lazy(() => import('./blocks/donation'));
const Contact = lazy(() => import('./blocks/contact'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback = {<div>Loading...</div>}>
        <Banner />
        <Video />
        <War />
        <Approach />
        <Help />
        <WhyUs />
        <Timing />
        <Donation />
        <Contact />
      </Suspense>
      <Footer />
    </>
  );
}
