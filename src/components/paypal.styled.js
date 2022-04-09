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

export const PaypalInput = styled.button`
  cursor: pointer;
  position: relative;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.125rem solid #ffc43a;
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 400;
  padding: 0.625rem 1.875rem;
  color: #121661;
  background: #ffc43a;
  transition: color .2s ease,background-color .2s ease,border-color .2s ease,box-shadow .2s ease;
  width: ${({ fullWidth }) => fullWidth === 'true' ? '100%' : 'auto'};

  :after {
    transition: color .2s ease,background-color .2s ease,border-color .2s ease,box-shadow .2s ease;
  }

  :active {
    background: #d89700;
    border-color: #d89700;
  }

  span {
    padding-right: ${({ isWidget }) => isWidget === 'true' ? '3px' : '0'};
  }

  svg {
    padding: 0 3px;
    font-size: 1.35rem;
  }

  :hover:after,
  :active:after {
    content: "";
    position: absolute;
    top: -0.325rem;
    left: -0.325rem;
    border: 0.1875rem solid #1040c1;
    box-shadow: 0 0 0 0.375rem rgb(16 114 235 / 16%);
    border-radius: 2rem;
    text-indent: -0.125rem;
    width: calc(100% + 0.25rem);
    height: calc(100% + 0.25rem);
    pointer-events: none;
  }
`;

export const PaypalLink = styled.input`
  cursor: pointer;
  font-size: 14px;
  color: ${Colors.yellow};
  font-weight: 700;
  background: transparent;
  border: none;
  padding: 0;

  :hover {
    color: ${Colors.blue};
  }
`;
