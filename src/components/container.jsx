import React from 'react';
import { $Container } from './container.styled';

export const Container = ({ children }) => {
  return (
    <$Container>
      {children}
    </$Container>
  );
}
