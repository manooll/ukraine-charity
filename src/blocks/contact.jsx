import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { ContactBlock, FormContainer, Form, Title, Label, Input, Textarea, Submit, Error, Success } from './contact.styled';
import { Container } from '../components/container';

export const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const [ isSubmitted, setSubmitted ] = useState(false);

  const onSubmit = () => {
    emailjs.sendForm('service_qzf5icb', 'template_8jeujdp', '#contact-form', 'Hqx5vnKbFE08R4iHv')
      .then((result) => {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
        console.log(result.text);
      }, (error) => {
        console.error(JSON.stringify(error));
      });
    reset();
  };

  return (
    <ContactBlock id='contact'>
      <Container>
        <FormContainer>
          <Title>Contact Us</Title>
          <Form onSubmit={handleSubmit(onSubmit)} id='contact-form'>
            {/* Email */}
            <Label>
              <span>Email*</span>
              <Input
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please provide a valid email address',
                  }
                })}
                placeholder='mail@gmail.com'
                type='email'
                name='email'
              />
              <Error>
                {errors.email?.type === 'required' && 'Please provide a valid email address'}
                {errors.email?.message}
              </Error>
            </Label>

            {/* Name */}
            <Label>
              <span>Name*</span>
              <Input
                {...register('userName', { required: true })}
                type='text'
                name='userName'
              />
              <Error>
                {errors.userName?.type === 'required' && 'Please provide a valid name'}
              </Error>
            </Label>

            {/* Phone */}
            <Label>
              <span>Phone*</span>
              <Input
                {...register('phone', {
                  required: true,
                })}
                placeholder='+1'
                type='text'
                name='phone'
              />
              <Error>
                {errors.phone?.type === 'required' && 'Please provide a valid phone number'}
                {errors.phone?.message}
              </Error>
            </Label>

            {/* Message */}
            <Label>
              <span>Message</span>
              <Textarea
                {...register('message')}
                placeholder='Enter your message'
                label='message'
                name='message'
                rows='5'
              />
            </Label>
            {isSubmitted && (
              <Success>Thank you for submission!</Success>
            )}
            <Submit type='submit' value='Send message' />
          </Form>
        </FormContainer>
      </Container>
    </ContactBlock>
  );
}
