import React, { useState } from 'react';
import { $Footer, $FooterWrap, $Logo, $Left, $Nav, $Right, $List, $ListItem } from './footer.styled';
import { Container } from '../components/container';

export const Footer = () => {
  const [ list ] = useState([
    { title: 'The War in Ukraine', scrollToElement: 'war' },
    { title: 'What can you do?', scrollToElement: 'timing' },
    { title: 'Our Approach', scrollToElement: 'approach' },
    { title: 'Contact Us', scrollToElement: 'contact' },
    { title: 'About Us', scrollToElement: 'why-us' },
    { title: 'Donate now', scrollToElement: 'donation' },
  ]);

  return (
    <$Footer>
      <Container>
        <$FooterWrap>
          <$Left>
            <$Logo />
            <a href='mailto:contact@globalaidfoundation.com'>contact@globalaidfoundation.com</a>
          </$Left>
          <$Nav>
            <$List>
              {list.map(({ title, scrollToElement }, index) => (
                <$ListItem
                  key={index}
                  to={scrollToElement}
                  smooth={true}
                  duration={1000}
                >
                  {title}
                </$ListItem>
              ))}
            </$List>
          </$Nav>
          <$Right>
            <a href="tel:+11234567890">+1 123 4567890</a>
            <a href="tel:+11239876543">+1 123 9876543</a>
            <a target="_blank" href="https://www.google.com/maps/search/New+York,+Loft+Pie,+22+Pink+Street/@40.8724068,-74.0461456,17z/data=!3m1!4b1">
              New York, Loft Pie, 22 Pink Street
            </a>
          </$Right>
        </$FooterWrap>
      </Container>
    </$Footer>
  );
}
