import styled from 'styled-components';
import { device } from '../assets/styles/media-query';

export const $Container = styled.div`
  margin: 0 18px;
  max-width: 100%;

  @media ${device.laptopM} { 
    margin: 0 auto;
    max-width: 1047px;
  }
`;