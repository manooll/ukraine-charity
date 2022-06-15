import React, { useState } from 'react';
import { FooterBlock, FooterWrap, Logo, Top, Bottom, Left, Nav, Right, List, ListItem } from './footer.styled';
import { Container } from '../components/container';
import { Paypal } from '../components/paypal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import footer from '../assets/img/footer-bg.webp';

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
    <FooterBlock id='footer'>
      <Container>
        <FooterWrap>
          <Top>
            <Left>
              <Logo />
              <a href='mailto:contact@globalaidfoundation.org'>contact@globalaidfoundation.org</a>
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
          </Top>
          <Bottom>
           The Internal Revenue Service (IRS) recognizes Global Aid Foundation as a Section 501(c)(3) public charity. Our Federal Tax ID Number is 88-1256826. Contributions to Global Aid Foundation may be eligible for tax deduction in the U.S.A., please consult your tax advisor for eligibility. No goods or services were offered or provided in exchange for this contribution. Financial and other information about Global Aid Foundation’s purpose, programs and activities can be obtained by writing to Global Aid Foundation at 503 E. Washington Ave., Suite 2C, Newtown, PA 18940.  
           <strong>Pennsylvania: The official registration and financial information of Global Aid Foundation may be obtained from the Pennsylvania Department of State by calling toll free, within Pennsylvania, <a href='tel:18007320999'>1-800-732-0999</a>. Registration does not imply endorsement.  
           New York:  A copy of Global Aid Foundation’s most recently filed financial report is available from the Charities Registry on the New York State Attorney General’s website at www.charitiesnys.com or, upon request, by contacting Global Aid Foundation at the above address or the New York State Attorney General, Charities Bureau, 28 Liberty Street, New York, NY 10005.  You may obtain information on charitable organizations from the New York State Office of the Attorney General at www.charitiesnys.com or by calling <a href='tel:12124168401'>(212) 416-8401</a>.</strong>
          </Bottom>
        </FooterWrap>
      </Container>
      <LazyLoadImage
        alt='Footer'
        effect='blur'
        src={footer}
      />
    </FooterBlock>
  );
}
