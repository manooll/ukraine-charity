import React, { useState } from 'react';
import { HelpBlock, HelpWrap, Title, SmallTitle, Text, List, ListItem, Icon, Left, Right } from './help.styled';
import { Container } from '../components/container';
import shipped from '../assets/img/shipped.svg';
import treatment from '../assets/img/treatment.svg';
import doctor from '../assets/img/doctor.svg';
import mask from '../assets/img/mask.svg';

export const Help = () => {
  const [ list ] = useState([
    { icon: shipped, text: 'Logistics (movement of supplies and refugee transportation)' },
    { icon: treatment, text: 'Medical supplies and medical equipment' },
    { icon: doctor, text: 'Help for medical personnel and hospitals' },
    { icon: mask, text: 'Personal protective equipment and safety gear for medical staff' },
  ]);

  return (
    <HelpBlock id='help'>
      <Container>
        <HelpWrap>
          <Left>
            <SmallTitle>HOW CAN I HELP?</SmallTitle>
            <Title>Our current and immediate humanitarian projects:</Title>
          </Left>
          <Right>
            <List>
              {list.map(({ icon, text }, index) => (
                <ListItem key={index}>
                  <Icon icon={icon} />
                  <Text>{text}</Text>
                </ListItem>
              ))}
            </List>
          </Right>
        </HelpWrap>
      </Container>
    </HelpBlock>
  );
}
