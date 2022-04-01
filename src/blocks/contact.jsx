import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { $Contact, $FormContainer, $Form, $Title, $Label, $Input, $Textarea, $Submit, $Error } from './contact.styled';
import { Container } from '../components/container';

export const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const [ mailSent, setMailSent ] = useState('');
  const [ formError, setFormError ] = useState('');

  const onSubmit = (data) => {
    emailjs.sendForm('service_qzf5icb', 'template_8jeujdp', data, 'Hqx5vnKbFE08R4iHv')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.error(JSON.stringify(error));
      });
    reset();
  };

  return (
    <$Contact id='contact'>
      <Container>
        <$FormContainer>
          <$Title>Contact Us</$Title>
          <$Form onSubmit={handleSubmit(onSubmit)}>
            {errors.message && <$Error>Fill out required inputs</$Error>}
              {/* Email */}
              <$Label>
                <span>Email*</span>
                <$Input
                  {...register('email', { required: true })}
                  placeholder='mail@gmail.com'
                  type='email'
                  name='email'
                />
              </$Label>

              {/* Name */}
              <$Label>
                <span>Name*</span>
                <$Input
                  {...register('userName', { required: true })}
                  type='text'
                  name='userName'
                />
              </$Label>

              {/* Phone */}
              <$Label>
                <span>Phone*</span>
                <$Input
                  {...register('phone', { required: true })}
                  placeholder='+1'
                  type='text'
                  name='phone'
                />
              </$Label>

              {/* Message */}
              <$Label>
                <span>Message</span>
                <$Textarea
                  {...register('message')}
                  placeholder='Enter your message'
                  label='message'
                  name='message'
                  rows='5'
                />
              </$Label>
            <$Submit type='submit' value='Send message' />
          </$Form>
        </$FormContainer>
      </Container>
    </$Contact>
  );
}
