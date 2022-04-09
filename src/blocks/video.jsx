import React from 'react';
import { VideoBlock, VideoWrap, Title } from './video.styled';
import { Container } from '../components/container';
import { LazyIframe } from '../components/iframe';

const Video = () => {
  return (
    <VideoBlock id='video'>
      <Container>
        <VideoWrap>
          <Title>Great Ukraine</Title>
          <LazyIframe
            url='https://www.youtube.com/embed/zwoJ_5JqA9k'
            title='YouTube video player'
          />
        </VideoWrap>
      </Container>
    </VideoBlock>
  );
}

export default Video;
