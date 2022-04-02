import styled from 'styled-components';
import { Colors } from '../assets/styles/colors';
import { device } from '../assets/styles/media-query';

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 4px;
  margin-bottom: 24px;

  @media ${device.tabletL} {
    column-gap: 12px;
  }
`;

export const ListItem = styled.input`
  cursor: pointer;
  color: ${({ isActive }) => isActive ? Colors.black : Colors.blue};
  border: 2px solid ${({ isActive }) => isActive ? Colors.blue : 'transparent'};
  background: ${({ isActive }) => isActive ? 'transparent': '#EDF4FA'};
  border-radius: 4px;
  padding: 14px;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 138%;
  text-align: center;
  height: 49px;
  box-sizing: border-box;
  letter-spacing: -1px;
  transition: .1s ease-in;

  :hover {
    background: ${({ isActive }) => isActive ? 'transparent': '#D5E9FA'};
  }
`;

export const PaypalInput = styled.input`
  cursor: pointer;
  box-sizing: border-box;
  background-color: ${Colors.yellow};
  color: ${Colors.black};
  padding: 12px 16px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
  transition: background-image .3s ease-in;
  width: 100%;
  text-align: center;

  :hover {
    background-image: linear-gradient(to bottom, #FEC600, #FEE500);
  }

  :active {
    background-image: linear-gradient(to bottom, #FEE500, #FEC600);
    box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
  }
`;


export const PaypalLink = styled.input`
`;
