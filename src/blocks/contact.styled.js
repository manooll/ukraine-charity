import styled from 'styled-components';
import { Colors } from '../assets/styles/colors';
import { device } from '../assets/styles/media-query';

export const $Contact = styled.div`
  padding: 40px 0 0;
  background: #EDF4FA;
  margin-bottom: -46px;

  @media ${device.tabletL} {
    padding: 56px 0 0;
    margin-bottom: -80px;
  }
`;

export const $FormContainer = styled.div`
  background: ${Colors.white};
  border-radius: 16px;
  padding: 29px;
  
  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.06);
  position: relative;
  z-index: 100;
  max-width: 693px;
  margin: 0 auto;

  @media ${device.tabletL} {
    padding: 56px;
  }
`;

export const $Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const $Label = styled.div`
  position: relative;
  margin-bottom: 24px;

  > span {
    position: absolute;
    top: -7px;
    left: 13px;
    font-size: 12px;
    font-weight: 500;
    padding: 0 4px;
    background: ${Colors.white};
    color: ${Colors.black};
  }
`;

export const $Title = styled.div`
  color: ${Colors.black};
  margin: 0 0 21px;
  font-size: 24px;
  font-weight: bold;

  @media ${device.tabletL} {
    margin: 0 0 34px;
    font-size: 32px;
  }
`;

const FormField = `
  width: 100%;
  font-size: 16px;
  padding: 18px 16px;
  border-radius: 8px;
  border: 1px solid #BEC1C4;
  box-sizing: border-box;

  :placeholder {
    color: red;
  }

  :focus,
  :focus-visible,
  :active {
    border-color: ${Colors.blue};
    outline: none;
  }

  @media ${device.tabletL} {

  }
`;

export const $Input = styled.input`
  ${FormField};
`;

export const $Textarea = styled.textarea`
  ${FormField};
  resize: none;
`;

export const $Submit = styled.input`
  cursor: pointer;
  background-color: ${Colors.yellow};
  color: ${Colors.black};
  padding: 12px 16px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
  max-width: 167px;
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

  }
`;

export const $Error = styled.small`
  display: inline-block;
  color: #C92519;
  font-size: 12px;
  font-weight: normal;
  margin-top: 5px;

  @media ${device.tabletL} {

  }
`;
