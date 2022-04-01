import styled from 'styled-components';
import { Colors } from '../assets/styles/colors';
import { device } from '../assets/styles/media-query';

export const HelpBlock = styled.div`
  padding: 39px 0;

  @media ${device.tabletL} {
    padding: 83px 0;
  }
`;

export const HelpWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tabletL} {
    flex-direction: row;
  }
`;

export const Title = styled.h2`
  margin: 5px 0 24px;
  font-size: 24px;
  line-height: 28px;
  font-weight: 600;

  @media ${device.tabletL} {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.8px;
  }
`;

export const SmallTitle = styled.h3`
  font-weight: 600;
  text-transform: uppercase;
  color: ${Colors.blue}; 
  font-size: 14px;
  margin: 0 0 10px;

  @media ${device.tabletL} {
    font-size: 18px;
    margin: 0 0 21px;
  }
`;

export const Left = styled.div`
  max-width: 309px;
  padding-left: 8px;
`;

export const Right = styled.div`
  padding: 0 0 0 10px;

  @media ${device.tabletL} {
    padding: 8px 0 0 40px;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 26px;

  @media ${device.tabletL} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 56px;
  }
`;

export const ListItem = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;

  @media ${device.tabletL} {
    font-size: 18px;
    line-height: 172%;
    letter-spacing: -1px;
  }
`;

export const Icon = styled.div`
  background: url(${({ icon }) => icon});
  width: 40px;
  height: 40px;
  margin-bottom: 8px;

  @media ${device.tabletL} {
    margin-bottom: 26px;
  }
`;

export const Text = styled.div`
  width: 85%;
`;