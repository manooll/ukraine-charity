import React from 'react';
import styled from 'styled-components';
import { Colors } from './assets/styles/colors';
import logo from './assets/img/global-aid.svg';

const ComingSoonContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  padding: 20px;
`;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(100px);
  }
`;

const Content = styled.div`
  text-align: center;
  max-width: 600px;
  padding: 60px 40px;

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const Logo = styled.img`
  width: 180px;
  height: auto;
  margin-bottom: 40px;
  filter: brightness(0) saturate(100%) invert(18%) sepia(98%) saturate(2297%) hue-rotate(197deg) brightness(93%) contrast(101%);

  @media (max-width: 768px) {
    width: 140px;
    margin-bottom: 30px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: ${Colors.blue};
  margin: 0 0 20px 0;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: ${Colors.black};
  opacity: 0.7;
  margin: 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Divider = styled.div`
  width: 60px;
  height: 4px;
  background: ${Colors.yellow};
  margin: 30px auto;
  border-radius: 2px;
`;

export const ComingSoon = () => {
  return (
    <ComingSoonContainer>
      <Content>
        <Logo src={logo} alt="Global Aid" />
        <Title>Coming Soon</Title>
        <Divider />
        <Subtitle>
          We're working on something special. Check back soon.
        </Subtitle>
      </Content>
    </ComingSoonContainer>
  );
};
