import styled from 'styled-components';
import { device } from '../assets/styles/media-query';

export const WarBlock = styled.div`
  padding: 40px 6px;

  button {
    font-size: 15px;
    padding: 10px 16px;
  }
`;

export const WarWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tabletL} {
    flex-direction: row;
  }
`;

export const Title = styled.h2`
  margin: 24px 0 14px;
  font-size: 24px;
  font-weight: bold;

  @media ${device.tabletL} {
    font-size: 32px;
    margin: 32px 0 24px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 20px;

  :last-child {
    margin-bottom: 26px;
  }

  > span {
    font-weight: bold;
  }

  @media ${device.tabletL} {
    font-size: 18px;
    line-height: 28px;
    margin: 0 0 29px;
  }
`;

export const Left = styled.div`
  > span {
    width: 88vw;
    height: 47.286667vw;
  }

  > span img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media ${device.tabletL} {
    padding: 0 36px 0 50px;

    > span {
      width: 33.1189710611vw;
      height: 33.1189710611vw;
      max-width: 412px;
      max-height: 412px;
    }

    > span img {
      object-fit: cover;
    }
  }
`;

export const Right = styled.div`
  input {
    font-size: 15px;
    padding: 10px 16px;
    text-transform: none;
    width: auto;
  }

  @media ${device.tabletL} {
    padding: 0 0 0 36px;
  }
`;
