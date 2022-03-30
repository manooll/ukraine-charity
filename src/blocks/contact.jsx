import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { $Contact, $FormContainer, $Form, $Title, $Label, $Input, $Textarea, $Submit, $Error } from './contact.styled';
import { Container } from '../components/container';

export const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const [ inputList ] = useState([
    {element: 'input', label: 'Email', type: 'email', placeholder: 'mail@gmail.com', required: true},
    {element: 'input', label: 'Name', type: 'text', placeholder: '', required: true},
    {element: 'input', label: 'Phone', type: 'text', placeholder: '+1', required: true},
    {element: 'textarea', label: 'Message', type: '', placeholder: 'Enter your message', required: false},
  ]);

  return (
    <$Contact id='contact'>
      <Container>
        <$FormContainer>
          <$Title>Contact Us</$Title>
          <$Form onSubmit={handleSubmit(onSubmit)}>
            {Object.keys(errors).length > 0 && <$Error>Fill required inputs</$Error>}
            {inputList.map(({ element, label, type, placeholder, required }) => (
              element === 'input' ? (
                <$Label>
                  <span>{label}</span>
                  <$Input
                    {...register(label, { required })}
                    placeholder={placeholder}
                    type={type}
                  />
                </$Label>
              ) : (
                <$Label>
                  <span>{label}</span>
                  <$Textarea
                    placeholder={placeholder}
                    label={label}
                    rows='5'
                  />
                </$Label>
              )
            ))}
            <$Submit type='submit' value='Send message' />
          </$Form>
        </$FormContainer>
      </Container>
    </$Contact>
  );
}
