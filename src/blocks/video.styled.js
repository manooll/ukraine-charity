import styled from 'styled-components';
import yellow from '../assets/img/yellow.svg';
import blue from '../assets/img/blue.svg';
import { Colors } from '../assets/styles/colors';
import { device } from '../assets/styles/media-query';

export const VideoBlock = styled.div`
  position: relative;
  background: ${Colors.black};
  padding: 49px 0;
  text-align: center;
  overflow: hidden;

  :before {
    content: '';
    position: absolute;
    top: 9.506109vw;
    right: -16.2vw;
    width: 35.7717041801vw;
    height: 35.1286173633vw;
    background: url(${yellow});
    background-repeat: no-repeat;
    background-size: contain;
  }

  :after {
    content: '';
    position: absolute;
    bottom: -8.752412vw;
    left: -16.977814vw;
    width: 49.469453vw;
    height: 45.369775vw;
    background: url(${blue});
    background-repeat: no-repeat;
    background-size: contain;
  }

  @media ${device.tabletL} {
    padding: 84px 0;

    :before {
      top: 3.506109vw;
      right: -7.2vw;
    }
  
    :after {
      bottom: -4.752412vw;
      left: -6.977814vw;
      width: 39.4694533762vw;
      height: 35.3697749196vw;
    }
  }
`;

export const VideoWrap = styled.div``;

export const Title = styled.h2`
  color: ${Colors.white};
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 15px;
  
  @media ${device.tabletL} {
    font-size: 32px;
    margin: 0 0 24px;
  }
`;

export const IFrame = styled.iframe`
  position: relative;
  width: 86.9333333333vw;
  height: 48.8vw;
  border: none;
  z-index: 1;

  @media ${device.tabletL} {
    width: 63.5vw;
    height: 35.69vw;
  }
`;
