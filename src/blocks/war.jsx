import React from 'react';
import { $War, $WarWrap, $Title, $Left, $WarPic, $Right, $Description } from './war.styled';
import { Container } from '../components/container';
import { Button, ButtonSize, ButtonColor, ButtonType } from '../components/button';
import { Link } from 'react-scroll';

export const War = () => {
  return (
    <$War id='war'>
      <Container>
        <$WarWrap>
          <$Left>
            <$WarPic />
          </$Left>
          <$Right>
            <$Title>The War in Ukraine</$Title>
            <$Description>
              The war in the Ukraine, which we have all been watching unfolding on our TV screens, <span>is affecting families, children, cities and countries. </span>
            </$Description>
            <$Description>
              While we have been in touch with families in Ukraine and have been assisting with funds and connections, we feel at this time we must do more to address the growing humanitarian crisis.
            </$Description>
            <Link
              to='donation'
              smooth={true}
              duration={1000}
            >
              <Button
                size={ButtonSize.large}
                color={ButtonColor.yellow}
                type={ButtonType.normal}
              >
                Donate now
              </Button>
            </Link>
          </$Right>
        </$WarWrap>
      </Container>
    </$War>
  );
}
