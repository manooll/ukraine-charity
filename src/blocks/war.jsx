import React from 'react';
import { WarBlock, WarWrap, Title, Left, Right, Description } from './war.styled';
import { Container } from '../components/container';
import { Paypal } from '../components/paypal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import war from '../assets/img/war.png';

export const War = () => {
  return (
    <WarBlock id='war'>
      <Container>
        <WarWrap>
          <Left>
            <LazyLoadImage
              alt='The War in Ukraine'
              effect='blur'
              src={war}
            />
          </Left>
          <Right>
            <Title>The War in Ukraine</Title>
            <Description>
              The war in the Ukraine, which we have all been watching unfolding on our TV screens, <span>is affecting families, children, cities and countries. </span>
            </Description>
            <Description>
              While we have been in touch with families in Ukraine and have been assisting with funds and connections, we feel at this time we must do more to address the growing humanitarian crisis.
            </Description>
            <Paypal
              isWidget={true}
              btnText='Donate now'
            />
          </Right>
        </WarWrap>
      </Container>
    </WarBlock>
  );
}
