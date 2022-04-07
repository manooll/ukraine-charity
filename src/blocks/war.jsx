import React from 'react';
import { WarBlock, WarWrap, Title, Left, WarPic, Right, Description } from './war.styled';
import { Container } from '../components/container';
import { Paypal } from '../components/paypal';

export const War = () => {
  return (
    <WarBlock id='war'>
      <Container>
        <WarWrap>
          <Left>
            <WarPic />
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
