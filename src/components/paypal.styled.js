import styled from 'styled-components';
import { Colors } from '../assets/styles/colors';

export const $Paypal = styled.button`
  cursor: pointer;
  background-color: ${Colors.yellow};
  color: ${Colors.black};
  text-transform: uppercase;
  font-size: 15px;
  padding: 10px 16px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
`;
