import React from 'react';
import { $Help, $HelpWrap, $Title, $Smalltitle, $Description, $Icon, $Left, $Right } from './timing.styled';
import { Container } from '../components/container';

export const Timing = () => {
  return (
    <$Help id='timing'>
      <Container>
        <$HelpWrap>
          <$Left />
          <$Right>
            <$Title>The timing and what can you do to help?</$Title>
            <$Icon />
            <$Description>
              Time is of the essence. We are seeing devastating situation on the ground in the Ukraine. We are on daily calls during which folks from the Ukraine have to stop the calls and run to bomb shelters. 
            </$Description>
            <$Smalltitle>We need to act now!</$Smalltitle>
            <$Description>
              Families are separated and need help. There is a shortage of medicine and doctors.
            </$Description>
          </$Right>
        </$HelpWrap>
      </Container>
    </$Help>
  );
}
