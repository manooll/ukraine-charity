import React from 'react';
import { $Banner, $Title, $Subtitle, $BannerWrap, $Pulse, $MouseScroll } from './banner.styled';
import { Container } from '../components/container';
import { Button, ButtonSize, ButtonColor, ButtonType } from '../components/button';
import { Link } from 'react-scroll';

export const Banner = () => {
  return (
    <$Banner id='banner'>
      <Container>
        <$BannerWrap>
          <$Title>Help <span>Ukraine!</span></$Title>
          <$Pulse />
          <$Subtitle>
            We appreciate <span>your care, help and sensitivity</span> to the urgency of this situation!
          </$Subtitle>
          <Link
            to='help'
            smooth={true}
            duration={1000}
          >
            <Button
              size={ButtonSize.large}
              color={ButtonColor.white}
              type={ButtonType.outlined}
            >
              How I can help?
            </Button>
          </Link>
          <Link
            to='video'
            smooth={true}
            duration={1000}
          >
            <$MouseScroll />
          </Link>
        </$BannerWrap>
      </Container>
    </$Banner>
  );
}
