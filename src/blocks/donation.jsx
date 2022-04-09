import React from 'react';
import { Appreciate, Text, DonationBlock, DonationWrap, Description, Title, SmallTitle, Left, Right, PaypalForm } from './donation.styled';
import { Container } from '../components/container';
import { Paypal } from '../components/paypal';

const Donation = () => {
  return (
    <>
      <DonationBlock id='donation'>
        <Container>
          <DonationWrap>
            <Left>
              <Title>Help to save Ukraine</Title>
              <Description>We have committed hundreds of thousands of dollars to start the fund and would love to see that amount grow with the kind contributions from all of you.</Description>
              <Description>To put it simply — having more funds now will help save lives. Your help with <span>$20, $200, $2000 or $20000</span> will go directly to the causes listed above.</Description>
            </Left>
            <Right>
              <PaypalForm>
                <SmallTitle>your donation will help</SmallTitle>
                <Paypal
                  isWidget={true}
                  fullWidth={true}
                  btnText='Donate'
                />
              </PaypalForm>
            </Right>
          </DonationWrap>
        </Container>
      </DonationBlock>
      <Appreciate>
        <Container>
          <Text>
            All of us appreciate your care, help and sensitivity to the urgency of this situation!
          </Text>
        </Container>
      </Appreciate>
    </>
  );
}

export default Donation;
