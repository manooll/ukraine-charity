import styled from 'styled-components';
import { Colors } from '../assets/styles/colors';
import { device } from '../assets/styles/media-query';

export const Appreciate = styled.div`
  background: #003D9D;
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  color: ${Colors.white};
  padding: 35px 5px;
  text-align: center;

  @media ${device.tabletL} {
    font-size: 28px;
    line-height: 32px;
    padding: 40px 0;
  }
`;

export const DonationBlock = styled.div`
  padding: 42px 5px 0;
  color: ${Colors.white};
  background: ${Colors.blue};

  @media ${device.tabletL} {
    padding: 71px 0 52px;
  }
`;

export const DonationWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tabletL} {
    flex-direction: row;
  }
`;

export const Text = styled.div`
  max-width: 670px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  margin: 5px 0 23px;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.3px;

  @media ${device.tabletL} {
    font-size: 32px;
    margin: 5px 0 16px;
  }
`;

export const SmallTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 0 19px 0;
  color: ${Colors.black};  
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  margin: 0 0 19px;

  > span {
    font-weight: bold;
  }

  @media ${device.tabletL} {
    font-size: 18px;
    line-height: 27px;
    margin: 0 0 24px;
  }
`;

export const Left = styled.div`
  padding-bottom: 20px;

  @media ${device.tabletL} {
    width: 51%;
    padding-right: 30px;
    padding-bottom: 0;
  }
`;

export const Right = styled.div`
  @media ${device.tabletL} {
    width: 54%;
    padding-top: 10px;
    padding-left: 22px;
  }
`;

export const PaypalForm = styled.div`
  position: relative;
  max-width: 100%;
  padding: 32px 4px;
  background: ${Colors.white};

  > * {
    position: relative;
    z-index: 1;
  }
  
  > button {
    width: 100%;
    padding: 15.5px;
    font-size: 15px;
  }

  > div:nth-child(2) {
    display: flex;
    justify-content: center;
  }

  :before {
    content: '';
    position: absolute;
    background: inherit;
    width: 250%;
    height: 100%;
    left: -50%;
    top: 0;
  }

  @media ${device.tabletL} {
    padding: 32px;
    border-radius: 8px;

    :before {
      display: none;
    }
  }
`;

export const Terms = styled.div`
  display: block;
  font-size: 10px;
  line-height: 14px;
  color: #666666;
  font-weight: 400;

  a {
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
    color: ${Colors.blue};
    text-decoration: underline;
    margin-left: 2px;
  }
`;
