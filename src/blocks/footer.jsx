import React, { useState } from 'react';
import { FooterBlock, FooterWrap, Logo, Left, Nav, Right, List, ListItem } from './footer.styled';
import { Container } from '../components/container';
import { Paypal } from '../components/paypal';

export const Footer = () => {
  const [ list ] = useState([
    { title: 'The War in Ukraine', scrollToElement: 'war', isPaypalLink: false },
    { title: 'What can you do?', scrollToElement: 'donation', isPaypalLink: false },
    { title: 'Our Approach', scrollToElement: 'approach', isPaypalLink: false },
    { title: 'Contact Us', scrollToElement: 'contact', isPaypalLink: false },
    { title: 'About Us', scrollToElement: 'why-us', isPaypalLink: false },
    { title: 'Donate now', scrollToElement: '', isPaypalLink: true },
  ]);

  return (
    <FooterBlock>
      <Container>
        <FooterWrap>
          <Left>
            <Logo />
            <a href='mailto:contact@globalaidfoundation.com'>contact@globalaidfoundation.com</a>
          </Left>
          <Nav>
            <List>
              {list.map(({ title, scrollToElement, isPaypalLink }, index) => (
                <React.Fragment key={index}>
                  {isPaypalLink ? (
                      <Paypal
                        btnText={title}
                        isLink={true}
                      />
                    ) : (
                      <ListItem
                        to={scrollToElement}
                        smooth={true}
                        duration={1000}
                        offset={-86}
                      >
                        {title}
                      </ListItem>
                    )
                  }
                </React.Fragment>
              ))}
            </List>
          </Nav>
          <Right>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.google.com/maps/place/503+Washington+Ave+%232c,+Newtown,+PA+18940,+%D0%A1%D0%A8%D0%90/@40.2291181,-74.9306173,17z/data=!3m1!4b1!4m5!3m4!1s0x89c154f334f3e707:0x285dd94510e9cccc!8m2!3d40.2291181!4d-74.9284286'
            >
              503 E Washington Ave Ste. 2C, Newtown, PA. 18940
            </a>
            <span>
              © Global Aid Foundation Inc
            </span>
          </Right>
        </FooterWrap>
      </Container>
    </FooterBlock>
  );
}
