import React from 'react';
import { ApproachBlock, ApproachWrap, Title, Subtitle, SmallTitle, WeUnderstand, Top, Bottom, Left, Right, Description } from './approach.styled';
import { Container } from '../components/container';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import approach from '../assets/img/approach.png';

export const Approach = () => {
  return (
    <ApproachBlock id='approach'>
      <Container>
        <ApproachWrap>
          <Top>
            <Title>Our Approach</Title>
            <Subtitle>
              We have come together to form a humanitarian fund and start deploying capital to assist in a number of immediate needs in the Ukraine 
            </Subtitle>
          </Top>
        </ApproachWrap>
      </Container>
      <WeUnderstand>
        <Bottom>
          <Left>
            <SmallTitle>We understand</SmallTitle>
            <Description>
              One of the keys to our approach is our personal and direct communication with Ukrainians at the epicentre of the crisis, as well as volunteer networks, logistics providers, hospitals and government officials. 
            </Description>
            <Description>
              We get continues reports from our Ukrainian contacts on the situation on the ground, <span>which allows our team to have deep understanding of the ever-changing humanitarian needs.</span> Working together with reliable NGO (non-government organization) partners in the United States, Poland, Romania and in EU we address these needs on a daily bases.
            </Description>
          </Left>
          <Right>
            <LazyLoadImage
              alt='Our Approach'
              effect='blur'
              src={approach}
            />
          </Right>
        </Bottom>
      </WeUnderstand>
    </ApproachBlock>
  );
}
