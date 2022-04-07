import React from 'react';
import { PaypalInput, PaypalLink } from './paypal.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal, faCcVisa, faCcMastercard, faCcDiscover } from '@fortawesome/free-brands-svg-icons';

export const Paypal = ({
  isWidget = false,
  isLink = false,
  isButton = false,
  fullWidth = false,
  btnText = 'Donate',
}) => {
  return (
    <form
      action = 'https://www.paypal.com/donate'
      method='post'
      target='_top'
    >
      <input
        type='hidden'
        name='hosted_button_id'
        value='XSFV948DXGLLG'
      />
      {isWidget && (
        <PaypalInput
          type='submit'
          border='0'
          name='submit'
          fullWidth={fullWidth.toString()}
          isWidget={isWidget.toString()}
        >
          <span>Donate with:</span> 
          <FontAwesomeIcon icon={faPaypal} /> 
          <FontAwesomeIcon icon={faCcVisa} /> 
          <FontAwesomeIcon icon={faCcMastercard} /> 
          <FontAwesomeIcon icon={faCcDiscover} />
        </PaypalInput>
      )}
      {isLink && (
        <PaypalLink
          type='submit'
          value={btnText}
          border='0'
          name='submit'
          title='PayPal - The safer, easier way to pay online!'
        />
      )}
      {isButton && (
        <PaypalInput
          type='submit'
          border='0'
          name='submit'
          fullWidth={fullWidth.toString()}
        >
          <span>{btnText}</span>
        </PaypalInput>
      )}
      <img
        alt=''
        border='0'
        src='https://www.paypal.com/en_US/i/scr/pixel.gif'
        width='1'
        height='1'
      />
    </form>
  );
}
