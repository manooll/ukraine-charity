import styled from 'styled-components';
import { Colors } from '../assets/styles/colors';
import logo from '../assets/img/global-aid.svg';
import { device } from '../assets/styles/media-query';
import { Link } from 'react-scroll';

export const FooterBlock = styled.div`
  position: relative;
  padding: 81px 10px 29px;

  > div {
    position: relative;
    z-index: 1;
  }

  > span {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  > span img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${device.tabletL} {
    padding: 127px 0 70px;
    background-position: 0 0;
  }
`;

export const FooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media ${device.tabletL} {
    flex-direction: row;
  }
`;

export const Logo = styled.div`
  width: 181px;
  height: 44px;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 16px;
`;

export const Left = styled.div`
  > a {
    font-size: 14px;
    color: ${Colors.yellow};
  }
`;

export const Nav = styled.div``;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16.395498vw;
  row-gap: 20px;
  padding-top: 3px;
  margin: 33px 0;

  @media ${device.tabletL} {
    margin: 0;
    column-gap: 7.39549839228vw;
    row-gap: 25px;
    padding-right: 25px;
  }
`;

export const ListItem = styled(Link)`
  cursor: pointer;
  color: ${Colors.white};
  font-size: 14px;
  font-weight: 600;

  :hover {
    color: ${Colors.yellow};
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 227px;

  > a,
  > span {
    font-size: 14px;
    color: ${Colors.white};
    font-weight: normal;
    opacity: .6;
    text-decoration: none;
    margin-bottom: 16px;
  }

  > a:hover {
    color: ${Colors.yellow};
  }

  @media ${device.tabletL} {
    max-width: 157px;
  }
`;
