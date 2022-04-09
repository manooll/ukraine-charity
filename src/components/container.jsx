import React from 'react';
import { ContainerBlock } from './container.styled';

export const Container = ({ children }) => {
  return (
    <ContainerBlock>
      {children}
    </ContainerBlock>
  );
}
