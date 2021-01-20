import React from 'react';
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormLabel,
  FormWrap,
  Icon,
  Text,
  FormInput,
} from './SigninElements';

const SignIn = () => {
  //Set theme function
  function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }
  // Immediately invoked function to set the theme on initial load
  (function getTheme(a) {
    a = localStorage.getItem('theme');

    if (a === 'dark-theme') {
      setTheme('dark-theme');
      a = 'light-theme';
    } else {
      setTheme('light-theme');
      a = 'dark-theme';
    }
  })();
  return (
    <>
      <Container>
        <Icon to="/">ArbiBoard</Icon>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="username" autocomplete="username" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                autocomplete="current-password"
                required
              />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
