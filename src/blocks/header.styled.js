import styled from 'styled-components';
import { Colors } from '../assets/styles/colors';
import { device } from '../assets/styles/media-query';
import { Link } from 'react-scroll';

export const HeaderBlock = styled.div`
  position: ${({ sticky }) => sticky === 'true' ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  overflow-x: hidden;
  height: ${({ active }) => active === 'true' ? '100%' : 'auto'};
  background: ${({ sticky }) => sticky === 'true' ? Colors.white : '#015BBB'};
  box-shadow: ${({ sticky }) => sticky === 'true' ? '0 1px 2px rgba(0, 0, 0, .15)' : 'none'};

  :after {
    content: '';
    position: absolute;
    top: 58px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #737AD1;
    display: ${({ sticky, active }) => sticky === 'true' || active === 'true' ? 'none' : 'block'};
  }

  @media ${device.tabletL} {
    height: auto;
    background: ${({ sticky }) => sticky === 'true' ? Colors.white : 'transparent'};

    :after {
      top: auto;
      bottom: 0;
      display: ${({ sticky }) => sticky === 'true' ? 'none' : 'block'};
    }
  }
`;

export const HeaderWrap = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.tabletL} {
    padding: 21px 0;
  }
`;

export const ToggleWrap = styled.div`
  position: relative;
  right: -13px;
  cursor: pointer;
  width: 60px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Toggle = styled.div`
  position: relative;
  width: 20px;
  height: 2px;
  background: ${({ sticky }) => sticky === 'true' ? Colors.black : Colors.white};

  :before,
  :after {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    background: inherit;
    left: 0;
  }

  :before {
    top: -6px;
  }

  :after {
    bottom: -6px;
  }

  @media ${device.tabletL} {
    display: none;
  }
`;

export const ToggleClose = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background: ${({ sticky }) => sticky === 'true' ? 'transparent' : 'rgba(255, 255, 255, .5)'};

  :before,
  :after {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    background: ${({ sticky }) => sticky === 'true' ? Colors.black : Colors.blue};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  :before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  :after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const Navigation = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  background: #015BBB;
  flex-direction: column;
  left: 0;
  top: 61px;
  height: calc(100vh - 61px);
  transform: ${({ active }) => active === 'true' ? 'translateX(0)' : 'translateX(100%)'};

  a {
    display: flex;
    justify-content: center;
  }

  form {
    display: flex;
    justify-content: center;
  }

  button {
    width: 327px;
    box-sizing: border-box;
    margin: 30px auto 0;
  }

  @media ${device.tabletL} { 
    position: relative;
    width: auto;
    flex-direction: row;
    background: transparent;
    left: auto;
    top: auto;
    height: auto;
    transform: translateX(0);

    button {
      width: 327px;
      margin: 0;
      font-size: 14px;
      padding: 8px 10px;
      white-space: nowrap;
    }

    @media ${device.tabletL} {
      button {
        font-size: 15px;
        width: auto;
        margin: 0;
      }
    }
  }
`;

export const Logo = styled.a`
  display: block;
  width: 146px;
  height: 34px;

  > span,
  > span img {
    width: 100%;
    height: 100%;
  }

  @media ${device.tabletL} {
    width: 181px;
    height: 44px;
  }
`;

export const List = styled.div`
  display: flex;
  padding: 0 9px;

  flex-direction: column;
  width 50%;
  margin: 30px auto 0;
  text-align: center;

  @media ${device.tabletL} { 
    flex-direction: row;
    width auto;
    margin: 0;
  }
`;

export const ListItem = styled(Link)`
  cursor: pointer;
  position: relative;
  padding: 20px 10px;
  color: ${Colors.white};
  font-weight: ${({ active }) => active === 'true' ? 700 : 600};
  z-index: 10;
  font-size: 18px;
  max-width: 300px;
  margin: 0 auto;
  white-space: nowrap;
  align-items: center;

  :hover {
    color: ${Colors.yellow};
  }

  :after {
    content: '';
    position: absolute;
    width: calc(100% - 20px);
    left: 10px;
    bottom: 5px;
    height: 3px;
    background-color: transparent;
  }

  @media ${device.tabletL} { 
    font-size: 13px;
    padding: 8px 10px;
    max-width: auto;
    margin: 0;
    color: ${({ sticky }) => sticky === 'true' ? Colors.black : Colors.white};
    treansition: .2s ease-in;

    :hover {
      color: ${({ sticky }) => sticky === 'true' ? Colors.blue : Colors.yellow};
    }

    :after {
      bottom: ${({ sticky }) => sticky === 'true' ? '-26.5px' : '-23.5px'};
      background-color: ${(props) => {
        if (props.active === 'true') {
          return props.sticky === 'true' ? Colors.blue : Colors.yellow;
        }
        return 'transparent';
      }};
    }
  }
  
  @media ${device.laptop} { 
    font-size: 15px;
  }
`;

export const PaypalInputOutlined = styled.input`
  cursor: pointer;
  width: 327px;
  margin: 30px auto 0;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 10px;
  color: ${Colors.yellow};
  border: 1.5px solid ${Colors.yellow};
  border-radius: 8px;
  background: transparent;
  transition: .2s ease-in;

  :hover,
  :active {
    color: ${Colors.blue};
    background: ${Colors.yellow};
  }

  @media ${device.tabletL} {
    font-size: 15px;
    width: auto;
    margin: 0;
  }
`;

export const PaypalInputNormal = styled.input`
  cursor: pointer;
  width: 327px;
  margin: 30px auto 0;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 10px;
  color: ${Colors.black};
  border: none;
  border-radius: 8px;
  background-image: linear-gradient(to bottom, ${Colors.yellow}, ${Colors.yellow});
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
    font-size: 15px;
    width: auto;
    margin: 0;
  }
`;
