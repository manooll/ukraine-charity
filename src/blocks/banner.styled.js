import styled from 'styled-components';
import { Colors } from '../assets/styles/colors';
import bannerBg from '../assets/img/banner-bg.png';
import scrolling from '../assets/img/scrolling.svg';
import pulse from '../assets/img/pulse.svg';
import { device } from '../assets/styles/media-query';

export const $Banner = styled.div`
  height: 100vh;
  max-height: -webkit-fill-available;
  background-color: ${Colors.blue};
  background-image: url(${bannerBg});
  background-size: cover;
  background-repeat: no-repeat;
  color: ${Colors.white};
`;

export const $BannerWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: -webkit-fill-available;
`;

export const $Pulse = styled.div`
  width: 40px;
  height: 24px;
  background-image: url(${pulse});
  background-size: contain;
  background-repeat: no-repeat;

  @media ${device.tabletL} {
    width: 56px;
    height: 33px;
  }
`;

export const $Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin: 0 0 10px;

  > span {
    color: ${Colors.yellow};
  }

  @media ${device.tabletL} {
    font-size: 64px;
    margin: 81px 0 10px;
  }
`

export const $Subtitle = styled.small`
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

export const $MouseScroll = styled.div`
  cursor: pointer;
  position: absolute;
  width: 32px;
  height: 32px;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: url(${scrolling});
  background-repeat: no-repeat;
  background-size: contain;
`;
