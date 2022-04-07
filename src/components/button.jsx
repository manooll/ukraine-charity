import React from 'react';
import { ButtonNormal, ButtonOutlined } from './button.styled';
import { Colors } from '../assets/styles/colors';

export const ButtonSize = {
  normal: 'normal',
  large: 'large',
};

export const ButtonColor = {
  yellow: Colors.yellow,
  white: Colors.white,
  blue: Colors.blue,
};

export const ButtonType = {
  outlined: 'outlined',
  normal: 'normal',
};

export const Button = ({
  size,
  color,
  type,
  children,
}) => {
  return type === ButtonType.normal ? (
    <ButtonNormal
      size={size}
      color={color}
    >
      {children}
    </ButtonNormal>
  ) : (
    <ButtonOutlined
      size={size}
      color={color}
    >
      {children}
    </ButtonOutlined>
  );
}
