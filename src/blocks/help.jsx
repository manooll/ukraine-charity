import React, { useState } from 'react';
import { $Help, $HelpWrap, $Title, $Smalltitle, $Text, $List, $ListItem, $Icon, $Left, $Right } from './help.styled';
import { Container } from '../components/container';
import shipped from '../assets/img/shipped.svg';
import treatment from '../assets/img/treatment.svg';
import doctor from '../assets/img/doctor.svg';
import mask from '../assets/img/mask.svg';

export const Help = () => {
  const [ list ] = useState([
    { icon: shipped, text: 'Logistics (movement of products and refugee transportation)' },
    { icon: treatment, text: 'Medical supplies and medical equipment' },
    { icon: doctor, text: 'Help for medical personnel and hospitals' },
    { icon: mask, text: 'Personal protective gear for medical staff (bullet proof vests, etc.)' },
  ]);

  return (
    <$Help id='help'>
      <Container>
        <$HelpWrap>
          <$Left>
            <$Smalltitle>HOW CAN I HELP?</$Smalltitle>
            <$Title>Some of the current and immediate projects we are working on:</$Title>
          </$Left>
          <$Right>
            <$List>
              {list.map(({ icon, text }, index) => (
                <$ListItem key={index}>
                  <$Icon icon={icon} />
                  <$Text>{text}</$Text>
                </$ListItem>
              ))}
            </$List>
          </$Right>
        </$HelpWrap>
      </Container>
    </$Help>
  );
}
