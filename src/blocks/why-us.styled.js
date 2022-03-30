import styled from 'styled-components';
import { Colors } from '../assets/styles/colors';
import support from '../assets/img/support.png';
import yellow from '../assets/img/yellow.svg';
import { device } from '../assets/styles/media-query';

export const $WhyUs = styled.div`
  display: flex;
  flex-direction: column;

  button {
    font-size: 15px;
    padding: 10px 16px;
  }

  @media ${device.tabletL} {
    flex-direction: row;
  }
`;

export const $Title = styled.h2`
  margin: 5px 0 17px;
  font-size: 24px;
  font-weight: 600;

  @media ${device.tabletL} {
    font-size: 32px;
    margin: 5px 0 24px;
  }
`;

export const $Description = styled.p`
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  margin: 0 0 22px;

  + button {
    margin-top: 5px;
  }

  > span {
    font-weight: bold;
  }

  @media ${device.tabletL} {
    font-size: 16px;
    line-height: 26px;
    margin: 0 0 26px;

    + button {
      margin-top: 8px;
    }
  }
`;

export const $Left = styled.div`
  position: relative;
  padding: 34px 24px;
  background: ${Colors.black};
  color: ${Colors.white};
  overflow: hidden;

  :before {
    content: '';
    position: absolute;
    bottom: -54.693891vw;
    right: -41.2vw;
    width: 65.771704vw;
    height: 75.128617vw;
    background: url(${yellow});
    background-repeat: no-repeat;
    background-size: contain;
  }

  @media ${device.tabletL} {
    padding: 97px 54px 102px 100px;

    :before {
      bottom: -24.693891vw;
      right: -24.2vw;
      width: 35.7717041801vw;
      height: 35.1286173633vw;
    }
  }
`;

export const $Right = styled.div`
  position: relative;
  min-width: 100%;
  min-height: 100%;
  height: 58.6666666667vw;
  background: url(${support});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  z-index: 1;

  @media ${device.tabletL} {
    min-width: 49.1961414791vw;
    min-height: 100%;
    height: auto;
  }
`;
