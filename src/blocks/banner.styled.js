import styled from 'styled-components';
import { Colors } from '../assets/styles/colors';
import { device } from '../assets/styles/media-query';

export const BannerBlock = styled.div`
  position: relative;
  height: 100vh;
  max-height: -webkit-fill-available;
  background-color: ${Colors.blue};
  color: ${Colors.white};

  > span {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  > span img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BannerWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: -webkit-fill-available;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin: 0 0 10px;

  > span {
    color: ${Colors.yellow};
  }

  + span {
    width: 40px;
    height: 24px;
  }

  + span img {
    width: 100%;
    height: 100%;
  }

  @media ${device.tabletL} {
    font-size: 64px;
    margin: 81px 0 10px;

    + span {
      width: 56px;
      height: 33px;
    }
  }
`

export const Subtitle = styled.small`
  display: inline-block;
  font-size: 16px;
  max-width: 450px;
  width: 90%;
  margin: 10px 0 25px;

  > span {
    font-weight: bold;
  }

  @media ${device.tabletL} {
    font-size: 20px;
    margin: 22px 0 33px;
  }
`;

export const MouseScroll = styled.div`
  cursor: pointer;
  position: absolute;
  width: 32px;
  height: 32px;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);

  > span,
  > span img {
    width: 100%;
    height: 100%;
  }
`;
