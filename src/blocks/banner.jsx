import React from 'react';
import { BannerBlock, BannerWrap, Title, Subtitle, Pulse, MouseScroll } from './banner.styled';
import { Container } from '../components/container';
import { Button, ButtonSize, ButtonColor, ButtonType } from '../components/button';
import { Link } from 'react-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import bannerBg from '../assets/img/banner-bg.png';

const Banner = () => {
  return (
    <BannerBlock id='banner'>
      <Container>
        <BannerWrap>
          <Title>Help <span>Ukraine!</span></Title>
          <Pulse />
          <Subtitle>
            We appreciate <span>your care, help and sensitivity</span> to the urgency of this situation!
          </Subtitle>
          <Link
            to='donation'
            smooth={true}
            duration={1000}
            offset={-86}
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
            offset={-86}
          >
            <MouseScroll />
          </Link>
        </BannerWrap>
      </Container>
      <LazyLoadImage
        alt='Global Aid Bg'
        effect='blur'
        src={bannerBg}
      />
    </BannerBlock>
  );
}

export default Banner;
