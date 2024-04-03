import React, { useState } from 'react';
import styled from 'styled-components';
import ReCAPTCHA from 'react-google-recaptcha';
import { TextButton } from '../buttons';

const SignInFormContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;

  & form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 99.5%;
    padding: 0.5rem;
    padding-bottom: 0;

    & input {
      width: 100%;
      height: 2rem;
      margin: 0.25rem;
      padding: 0.5rem;
      border: none;
      border-radius: 0.25rem;
      box-shadow: var(--box-shadow-1);
    }

    & button {
      width: 100%;
      margin-top: 0.5rem;
    }
  }

  @media (max-width: 350px) {
    width: 50%;
    margin-top: 2rem;
  }
`;

const StyledReCAPTCHA = styled(ReCAPTCHA)`
  width: 100%;

  @media (max-width: 350px) {
    transform:scale(0.48);
    transform-origin:0 0;
    margin: 0.1rem;
  }
`;

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-in logic here, including captcha verification
    if (captchaToken) {
      // Captcha token is available, proceed with sign-in
      console.log('Sign-in successful');
    } else {
      // Captcha token is missing, show error message
      console.log('Please complete the reCAPTCHA');
    }
  };

  return (
    <SignInFormContainer>
      <form onSubmit={handleSubmit}>
      <input type="email" id="email" placeholder="Email" value={email} onChange={handleEmailChange} />
      <input type="password" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} />

      <StyledReCAPTCHA 
        sitekey="6Ld0Cq0pAAAAAF3SidWDTypsWctA9u5Bz1lxZEcB" 
        onChange={handleCaptchaChange} />

      <TextButton text="Sign In" onClick={handleSubmit} />
      {/* <button type="submit">Sign In</button> */}
    </form>
    </SignInFormContainer>
  );
};

export default SignInForm;