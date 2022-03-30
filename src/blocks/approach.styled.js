import styled from 'styled-components';
import approach from '../assets/img/approach.png';
import pulse from '../assets/img/pulse-blue.svg';
import { Colors } from '../assets/styles/colors';
import { device } from '../assets/styles/media-query';

export const $Approach = styled.div`
  background-image: linear-gradient(to bottom right, ${Colors.blue}, #2601BB); 
`;

export const $ApproachWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  text-align: center;
  color: ${Colors.white};

  @media ${device.tabletL} {
    padding: 54px 0;

    :before {
      content: '';
      position: absolute;
      background: url(${pulse});
      width: 143px;
      height: 49px;
      top: -26px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const $Title = styled.h2`
  margin: 5px 0 15px;
  font-size: 24px;
  font-weight: bold;

  @media ${device.tabletL} {
    font-size: 32px;
  }
`;

export const $Subtitle = styled.div`
  max-width: 754px;
  font-size: 17px;
  line-height: 24px;
  margin: 0 auto;

  @media ${device.tabletL} {
    font-size: 22px;
    line-height: 32px;
  }
`;

export const $Smalltitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${Colors.blue};
  margin: 0 0 10px;

  @media ${device.tabletL} {
    font-size: 18px;
    margin: 0 0 20px;
  }
`;

export const $Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 21px;

  > span {
    font-weight: bold;
  }

  @media ${device.tabletL} {
    font-size: 18px;
    line-height: 30px;
    margin: 0 0 28px;
  }
`;

export const $WeUnderstand = styled.div``;

export const $Top = styled.div`
`;

export const $Bottom = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tabletL} {
    flex-direction: row;
  }
`;

export const $Left = styled.div`
  background: #EDF4FA;
  padding: 39px 24px 18px;

  @media ${device.tabletL} {
    padding: 80px 53px 55px 100px;
  }
`;

export const $Right = styled.div`
  min-width: 100%;
  height: 58.6666666667vw;
  background: url(${approach});
  background-repeat: no-repeat;
  background-size: cover;

  @media ${device.tabletL} {
    min-width: 49.1961414791vw;
    min-height: 100%;
    height: auto;
  }
`;
