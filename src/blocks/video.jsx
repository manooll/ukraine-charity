import React from 'react';
import { VideoBlock, VideoWrap, Title, IFrame } from './video.styled';
import { Container } from '../components/container';

const Video = () => {
  return (
    <VideoBlock id='video'>
      <Container>
        <VideoWrap>
          <Title>Great Ukraine</Title>
          <IFrame
            src='https://www.youtube.com/embed/zwoJ_5JqA9k'
            srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/Y8Wp3dafaMQ?autoplay=1><img src=https://img.youtube.com/vi/Y8Wp3dafaMQ/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>"
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          />
        </VideoWrap>
      </Container>
    </VideoBlock>
  );
}

export default Video;
