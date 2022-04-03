import React, { useState } from 'react';
import { HeaderBlock, HeaderWrap, Toggle, Navigation, Logo, List, ListItem, ToggleWrap, ToggleClose, PaypalInputOutlined, PaypalInputNormal } from './header.styled';
import { Container } from '../components/container';
import { useEffect } from 'react';
import { Paypal } from '../components/paypal';

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
    <HeaderBlock
      active={menuActive.toString()}
      sticky={isSticky.toString()}
    >
      <Container>
        <HeaderWrap>
          <Logo
            href={window.location}
            sticky={isSticky.toString()}
          />
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
            <Paypal />
            {/* <form
              action = 'https://www.paypal.com/donate'
              method='post'
              target='_top'
            >
              <input
                type='hidden'
                name='hosted_button_id'
                value='XSFV948DXGLLG'
              />
              {(!isSticky && deviceWidthState === tabletL) ||
                deviceWidthState === mobileM ? (
                  <PaypalInputOutlined
                    type='submit'
                    value='Donate'
                    border='0'
                    name='submit'
                    title='PayPal - The safer, easier way to pay online!'
                  />
                ) : (
                  <PaypalInputNormal
                    type='submit'
                    value='Donate'
                    border='0'
                    name='submit'
                    title='PayPal - The safer, easier way to pay online!'
                  />
                )
              }
            </form> */}
          </Navigation>
        </HeaderWrap>
      </Container>
    </HeaderBlock>
  );
}
