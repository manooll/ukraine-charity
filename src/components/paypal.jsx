import React, { useState } from 'react';
import { List, ListItem, PaypalInput, PaypalLink, PaypalIcon } from './paypal.styled';

export const Paypal = ({
  isWidget = false,
  isLink = false,
  fullWidth = false,
  btnText,
}) => {
  // const [ list, setList ] = useState([
  //   { value: 10, isActive: true },
  //   { value: 20, isActive: false },
  //   { value: 50, isActive: false },
  //   { value: 100, isActive: false },
  //   { value: 'Other', isActive: false },
  // ]);

  // const onChange = (i) => {
  //   const updatedList = [...list];
  //   updatedList.map((item, index) => {
  //     if (index === i) {
  //       item.isActive = true;
  //     } else {
  //       item.isActive = false;
  //     }
  //     return item;
  //   });

  //   setList(updatedList);
  // }

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
      {/* {isWidget && !isLink && (
        <List>
          {list.map(({ value, isActive }, index) => (
            <React.Fragment key={`${value}_${index}`}>
              <ListItem
                isActive={isActive}
                onClick={() => onChange(index)}
                type='submit'
                name={value.toString()}
                value={typeof value === 'number' ? `$${value}` : value}
              />
            </React.Fragment>
          ))}
        </List>
      )} */}
      {isLink ? (
        <PaypalLink
          type='submit'
          value={btnText}
          border='0'
          name='submit'
          title='PayPal - The safer, easier way to pay online!'
        />
      ) : (
        <PaypalInput
          type='submit'
          border='0'
          name='submit'
          title='PayPal - The safer, easier way to pay online!'
          fullWidth={fullWidth.toString()}
        >
          <PaypalIcon />
          <span>Donate with PayPal</span>
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
