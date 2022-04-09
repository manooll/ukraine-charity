import React, { useState } from 'react';
import { HeaderBlock, HeaderWrap, Toggle, Navigation, Logo, List, ListItem, ToggleWrap, ToggleClose } from './header.styled';
import { Container } from '../components/container';
import { Paypal } from '../components/paypal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import logo from '../assets/img/global-aid.svg';
import logoBlue from '../assets/img/global-aid-blue.svg';

export const Header = () => {
  const [ menuActive, toggleMenuActive ] = useState(false);
  const [ isSticky, setSticky ] = useState(false);

  const [ list, updateList ] = useState([
    { title: 'The War in Ukraine', scrollToElement: 'war', isActive: true },
    { title: 'Our Approach', scrollToElement: 'approach', isActive: false },
    { title: 'About Us', scrollToElement: 'why-us', isActive: false },
    { title: 'What can you do?', scrollToElement: 'donation', isActive: false },
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

  window.addEventListener('scroll', toggleHeaderSticky);

  return (
    <HeaderBlock
      active={menuActive.toString()}
      sticky={isSticky.toString()}
    >
      <Container>
        <HeaderWrap>
          <Logo
            href={window.location}
            sticky={isSticky.toString()}
          >
            {isSticky ? (
              <LazyLoadImage
                alt='Global Aid Logo'
                effect='blur'
                src={logoBlue}
              />
            ) : (
              <LazyLoadImage
                alt='Global Aid Logo'
                effect='blur'
                src={logo}
              />
            )}
          </Logo>
          <ToggleWrap
            onClick={() => toggleMenuActive(!menuActive)}
          >
            {menuActive ? (
              <ToggleClose
                sticky={isSticky.toString()}
              />
            ) : (
              <Toggle
                sticky={isSticky.toString()}
              />
            )}
          </ToggleWrap>
          <Navigation
            active={menuActive.toString()}
          >
            <List>
              {list.map(({ title, isActive, scrollToElement }, index) => (
                <ListItem
                  key={index}
                  active={isActive.toString()}
                  sticky={isSticky.toString()}
                  to={scrollToElement}
                  onClick={() => handleNavigate(index)}
                  smooth={true}
                  duration={1000}
                  offset={-86}
                >
                  {title}
                </ListItem>
              ))}
            </List>
            <Paypal
              isWidget={true}
            />
          </Navigation>
        </HeaderWrap>
      </Container>
    </HeaderBlock>
  );
}
