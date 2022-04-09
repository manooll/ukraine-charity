import styled from 'styled-components';
import { device } from '../assets/styles/media-query';

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
