import React from 'react';
import { $WhyUs, $Title, $Description, $Left, $Right } from './why-us.styled';
import { Button, ButtonSize, ButtonColor, ButtonType } from '../components/button';
import { Link } from 'react-scroll';

export const WhyUs = () => {
  return (
    <$WhyUs id='why-us'>
      <$Left>
        <$Title>Why us and why now?</$Title>
        <$Description>Our team includes five global business executives and a medical doctor. All six of us are naturalized US citizens with common history, language and strong connections with the Ukrainian people. We have all had successful careers and spent years in project execution, procurement, logistics and working with teams globally and in Ukraine.</$Description>
        <$Description><span>Seeing the continuing crisis in the region, we believe the time to act is now!</span> We know that our funds, pooled together with contribution from all of you, will allow us to make immediate and significant impact.</$Description>
        <Link
          to='donation'
          smooth={true}
          duration={1000}
        >
          <Button
            size={ButtonSize.normal}
            color={ButtonColor.yellow}
            type={ButtonType.normal}
          >
            Donate now
          </Button>
        </Link>
      </$Left>
      <$Right />
    </$WhyUs>
  );
}
