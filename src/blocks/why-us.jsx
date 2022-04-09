import React from 'react';
import { WhyUsBlock, Title, Description, Left, Right } from './why-us.styled';
import { Paypal } from '../components/paypal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import support from '../assets/img/support.png';

export const WhyUs = () => {
  return (
    <WhyUsBlock id='why-us'>
      <Left>
        <Title>Why us and why now?</Title>
        <Description>Global Aid Foundation was founded by five executives and a medical doctor, who are naturalized US citizens, and who have deep connections with Ukrainian people, Ukrainian history, language and beliefs. We have all had successful careers and spent years in project execution, procurement, logistics and working with teams globally and in Ukraine.</Description>
        <Description>Seeing the continuing crisis in Ukraine, we believe NOW is the time to act! We know that our funds as well as your kind contributions will allow us to make an immediate and significant impact and save lives.</Description>
        <Paypal
          isWidget={true}
          btnText='Donate now'
        />
      </Left>
      <Right>
        <LazyLoadImage
          alt='Why us and why now?'
          effect='blur'
          src={support}
        />
      </Right>
    </WhyUsBlock>
  );
}
