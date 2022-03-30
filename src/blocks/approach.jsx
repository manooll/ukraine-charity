import React from 'react';
import { $Approach, $ApproachWrap, $Title, $Subtitle, $Smalltitle, $WeUnderstand, $Top, $Bottom, $Left, $Right, $Description } from './approach.styled';
import { Container } from '../components/container';

export const Approach = () => {
  return (
    <$Approach id='approach'>
      <Container>
        <$ApproachWrap>
          <$Top>
            <$Title>Our Approach</$Title>
            <$Subtitle>
              We have come together to form a humanitarian fund and start deploying capital to assist in a number of immediate needs in the Ukraine
            </$Subtitle>
          </$Top>
        </$ApproachWrap>
      </Container>
      <$WeUnderstand>
        <$Bottom>
          <$Left>
            <$Smalltitle>We understand</$Smalltitle>
            <$Description>
              One of the keys to our approach is our personal and direct communication with Ukrainian businesses, volunteer networks, logistics providers, hospitals and government officials.
            </$Description>
            <$Description>
              We get daily reports from our Ukrainian contacts on the situation on the ground, <span>deep understanding of the ever-changing humanitarian needs</span> and reliable NGO (non-government organization) partners in United States, Poland, Romania and in EU.
            </$Description>
          </$Left>
          <$Right />
        </$Bottom>
      </$WeUnderstand>
    </$Approach>
  );
}
