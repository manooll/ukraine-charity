import styled from 'styled-components';
import { Colors } from '../assets/styles/colors';
import timing from '../assets/img/timing.png';
import pulse from '../assets/img/pulse-timing.svg';
import { device } from '../assets/styles/media-query';

export const TimingBlock = styled.div`
  padding: 44px 0 17px;

  @media ${device.tabletL} {
    padding: 84px 0 71px;
  }
`;

export const TimingWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tabletL} {
    flex-direction: row;
  }
`;

export const Title = styled.h2`
  margin: 26px 0 15px;
  font-size: 24px;
  font-weight: 600;
  max-width: 442px;

  @media ${device.tabletL} {
    font-size: 32px;
    margin: 0 0 21px;
  }
`;

export const SmallTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${Colors.blue};  
  margin: 23px 0 9px;

  @media ${device.tabletL} {
    font-size: 18px;
    margin: 29px 0 12px;
  }
`;

export const Icon = styled.div`
  background: url(${pulse});
  background-repeat: no-repeat;
  background-size: contain;
  width: 42px;
  height: 25px;
  margin: 0 0 12px;

  @media ${device.tabletL} {
    width: 56px;
    height: 33px;
    margin: 0 0 16px;
  }
`;

export const Description = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 24px;

  > span {
    font-weight: bold;
  }

  @media ${device.tabletL} {
    font-size: 18px;
    line-height: 30px;
    margin: 0 0 24px;
  }
`;

export const Left = styled.div`
  width: 88vw;
  height: 47.286667vw;
  background: url(${timing});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;

  @media ${device.tabletL} {
    width: 106.318971vw;
    height: 30.318971vw;
    max-width: 412px;
    max-height: 412px;
    background-position: 0 0;
    margin-right: 36px;
    margin-left: 48px;
  }
`;

export const Right = styled.div`
  padding: 0 8px;

  @media ${device.tabletL} {
    padding: 12px 0 0 36px;
  }
`;
