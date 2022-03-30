import styled from 'styled-components';
import logo from '../assets/img/global-aid.svg';
import logoBlue from '../assets/img/global-aid-blue.svg';
import pulse from '../assets/img/header-pulse.svg';
import { Colors } from '../assets/styles/colors';
import { device } from '../assets/styles/media-query';
import { Link } from 'react-scroll';

export const $Header = styled.div`
  position: ${({ sticky }) => sticky ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  overflow-x: hidden;
  height: ${({ active }) => active ? '100%' : 'auto'};
  background: ${({ sticky }) => sticky ? Colors.white : '#015BBB'};
  box-shadow: ${({ sticky }) => sticky ? '0 1px 2px rgba(0, 0, 0, .15)' : 'none'};

  :after {
    content: '';
    position: absolute;
    top: 58px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #737AD1;
    display: ${({ sticky, active }) => sticky || active ? 'none' : 'block'};
  }

  @media ${device.tabletL} {
    height: auto;
    background: ${({ sticky }) => sticky ? Colors.white : 'transparent'};

    :after {
      top: auto;
      bottom: 0;
      display: ${({ sticky }) => sticky ? 'none' : 'block'};
    }
  }
`;

// bottom: -17px;
// height: 42px;
// background: url(${pulse});
// background-size: contain;
// background-position: 30% 0;
// background-repeat: repeat-x;

export const $HeaderWrap = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.tabletL} {
    padding: 21px 0;
  }
`;

export const $ToggleWrap = styled.div`
  position: relative;
  right: -13px;
  cursor: pointer;
  width: 60px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const $Toggle = styled.div`
  position: relative;
  width: 20px;
  height: 2px;
  background: ${({ sticky }) => sticky ? Colors.black : Colors.white};

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

export const $ToggleClose = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background: ${({ sticky }) => sticky ? 'transparent' : 'rgba(255, 255, 255, .5)'};

  :before,
  :after {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    background: ${({ sticky }) => sticky ? Colors.black : Colors.blue};
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

export const $Navigation = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  background: #015BBB;
  flex-direction: column;
  left: 0;
  top: 61px;
  height: calc(100vh - 61px);
  transform: ${({ active }) => active ? 'translateX(0)' : 'translateX(100%)'};

  a {
    display: flex;
    justify-content: center;
  }

  button {
    width: 327px;
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
      width: auto;
      margin: 0;
    }
  }
`;

export const $Logo = styled.div`
  width: 146px;
  height: 34px;
  background-image: url(${({ sticky }) => sticky ? logoBlue : logo});
  background-size: contain;
  background-repeat: no-repeat;

  @media ${device.tabletL} {
    width: 181px;
    height: 44px;
  }
`;

export const $List = styled.div`
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

export const $ListItem = styled(Link)`
  cursor: pointer;
  position: relative;
  padding: 20px 10px;
  color: ${Colors.white};
  font-weight: ${(props) => props.active ? 700 : 600};
  z-index: 10;
  font-size: 18px;
  max-width: 300px;
  margin: 0 auto;

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
    color: ${({ sticky }) => sticky ? Colors.black : Colors.white};
    treansition: .2s ease-in;

    :hover {
      color: ${({ sticky }) => sticky ? Colors.blue : Colors.yellow};
    }

    :after {
      bottom: ${({ sticky }) => sticky ? '-26.5px' : '-23.5px'};
      background-color: ${(props) => {
        if (props.active) {
          return props.sticky ? Colors.blue : Colors.yellow;
        }
        return 'transparent';
      }};
    }
  }
  
  @media ${device.laptop} { 
    font-size: 15px;
  }
`;
