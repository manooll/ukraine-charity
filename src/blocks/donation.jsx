import React from 'react';
import { Appreciate, Text, DonationBlock, DonationWrap, Description, Title, SmallTitle, Left, Right, PaypalForm, Terms } from './donation.styled';
import { Container } from '../components/container';
import { Paypal } from '../components/paypal';
import { Link } from 'react-scroll';

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
                <Terms>
                  The Internal Revenue Service (IRS) is currently reviewing Global Aid Foundation Inc. application as a Section 501(c)(3) public charity. Our Federal Tax ID Number is 88-1256826. Once the organization receives its tax-exempt status, contributions to Global Aid Foundation Inc. may be eligible for tax deduction in the U.S.A., please consult your tax advisor for eligibility. No goods or services were offered or provided in exchange for this contribution. For more information on federal and state filing, please click 
                  <Link
                    to='footer'
                    smooth={true}
                    duration={1000}
                    offset={-86}
                  >
                    here
                  </Link>
                </Terms>
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
