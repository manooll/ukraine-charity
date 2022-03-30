import styled from 'styled-components';
import { ButtonSize, ButtonColor } from './button';
import { device } from '../assets/styles/media-query';
import { Colors } from '../assets/styles/colors';

export const $Button = styled.button`
  cursor: pointer;
  font-size: ${({ size }) => size === ButtonSize.normal ? '14px' : '16px'};
  font-weight: bold;
  padding: ${({ size }) => size === ButtonSize.normal ? '8px 10px' : '10px 18px'};
  color: ${({ color }) => color === ButtonColor.yellow ? Colors.black : Colors.white};
  border: none;
  border-radius: 8px;
  background-image: ${({ color }) => `linear-gradient(to bottom, ${color}, ${color})`};
  box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
  transition: background-image .3s ease-in;

  :hover {
    background-image: linear-gradient(to bottom, #FEC600, #FEE500);
  }

  :active {
    background-image: linear-gradient(to bottom, #FEE500, #FEC600);
    box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
  }

  @media ${device.tabletL} {
    font-size: ${({ size }) => size === ButtonSize.normal ? '15px' : '20px'};
  }
`;

export const $ButtonOutlined = styled.button`
  cursor: pointer;
  font-size: ${({ size }) => size === ButtonSize.normal ? '14px' : '16px'};
  font-weight: bold;
  padding: ${({ size }) => size === ButtonSize.normal ? '8px 10px' : '10px 18px'};
  color: ${({ color }) => color};
  border: 1.5px solid ${({ color }) => color};
  border-radius: 8px;
  background: transparent;
  transition: .2s ease-in;

  :hover,
  :active {
    color: ${Colors.blue};
    background: ${({ color }) => color === ButtonColor.yellow? Colors.yellow : Colors.white};
  }

  @media ${device.tabletL} {
    font-size: ${({ size }) => size === ButtonSize.normal ? '15px' : '20px'};
  }
`;
