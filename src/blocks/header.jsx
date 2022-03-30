import React, { useState } from 'react';
import { $Header, $HeaderWrap, $Toggle, $Navigation, $Logo, $List, $ListItem, $ToggleWrap, $ToggleClose } from './header.styled';
import { Button, ButtonSize, ButtonColor, ButtonType } from '../components/button';
import { Container } from '../components/container';
import { useEffect } from 'react';
import { Link } from 'react-scroll';

const mobileM = 375;
const tabletL = 991;

export const Header = () => {
  const [ menuActive, toggleMenuActive ] = useState(false);
  const [ isSticky, setSticky ] = useState(false);
  const [ deviceWidthState, setDeviceWidthState ] = useState(tabletL);

  const [ list, updateList ] = useState([
    { title: 'The War in Ukraine', scrollToElement: 'war', isActive: true },
    { title: 'Our Approach', scrollToElement: 'approach', isActive: false },
    { title: 'About Us', scrollToElement: 'why-us', isActive: false },
    { title: 'What can you do?', scrollToElement: 'timing', isActive: false },
    { title: 'Contact Us', scrollToElement: 'contact', isActive: false },
  ]);

  const handleNavigate = (i) => {
    const updatedList = [...list];
    updatedList.map((item, index) => {
      if (index === i) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
      return item;
    });
    toggleMenuActive(false);
    updateList(updatedList);
  };

  const toggleHeaderSticky = () => {
    if (window.scrollY >= 30) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  const toggleDeviceWidthState = () => {
    if (window.innerWidth <= tabletL) {
      setDeviceWidthState(mobileM);
    } else {
      setDeviceWidthState(tabletL);
    }
  }

  window.addEventListener('scroll', toggleHeaderSticky);
  window.addEventListener('resize', toggleDeviceWidthState);

  useEffect(() => {
    toggleDeviceWidthState();
  }, []);

  return (
    <$Header
      active={menuActive}
      sticky={isSticky}
    >
      <Container>
        <$HeaderWrap>
          <$Logo sticky={isSticky} />
          <$ToggleWrap
            onClick={() => toggleMenuActive(!menuActive)}
          >
            {menuActive ? (
              <$ToggleClose
                sticky={isSticky}
              />
            ) : (
              <$Toggle
                sticky={isSticky}
              />
            )}
          </$ToggleWrap>
          <$Navigation
            active={menuActive}
          >
            <$List>
              {list.map(({ title, isActive, scrollToElement }, index) => (
                <$ListItem
                  key={index}
                  active={isActive}
                  sticky={isSticky}
                  to={scrollToElement}
                  onClick={() => handleNavigate(index)}
                  smooth={true}
                  duration={1000}
                >
                  {title}
                </$ListItem>
              ))}
            </$List>
            <Link
              to='donation'
              smooth={true}
              duration={1000}
            >
              {(!isSticky && deviceWidthState === tabletL) ||
                deviceWidthState === mobileM ? (
                <Button
                  size={ButtonSize.normal}
                  color={ButtonColor.yellow}
                  type={ButtonType.outlined}
                >
                  Donate
                </Button>
                ) : (
                  <Button
                    size={ButtonSize.normal}
                    color={ButtonColor.yellow}
                    type={ButtonType.normal}
                  >
                    Donate
                  </Button>
                )
              }
            </Link>
          </$Navigation>
        </$HeaderWrap>
      </Container>
    </$Header>
  );
}
