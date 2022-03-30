import React from 'react';
import { $Video, $VideoWrap, $Title, $IFrame } from './video.styled';
import { Container } from '../components/container';

export const Video = () => {
  return (
    <$Video id='video'>
      <Container>
        <$VideoWrap>
          <$Title>Great Ukraine</$Title>
          <$IFrame
            src="https://www.youtube.com/embed/kX92fn68zGw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </$VideoWrap>
      </Container>
    </$Video>
  );
}
