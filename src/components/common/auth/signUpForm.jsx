import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { TextButton } from '../buttons';
import styled from 'styled-components';

const SignUpFormContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: var(--txt-font-1);
`;

const StyledSignUpForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  padding-bottom: 0;
  font-family: var(--txt-font-1);

  & button {
    width: 100%;
    margin-top: 0.5rem;
  }
`;

const SignUpFormInput = styled.input`
  width: 100%;
  height: 2rem;
  margin: 0.25rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  box-shadow: var(--box-shadow-1);
  font-family: var(--txt-font-1);
`;

const StyledReCAPTCHA = styled(ReCAPTCHA)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  transition: all 0.3s ease-in-out;

  @media only screen and (max-width: 350px) {
    transform:scale(0.75);
    transform-origin:0 0;
  }
`;

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCaptchaChange = (value) => {
    setIsCaptchaVerified(!!value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isCaptchaVerified) {
      // Perform sign-up logic here
      console.log('Email:', email);
      console.log('Password:', password);
    } else {
      alert('Please verify that you are not a robot.');
    }
  };

  const [confirmPassword, setConfirmPassword] = useState('');

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validatePassword = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
    }
  };

  return (
    <SignUpFormContainer>
      <StyledSignUpForm onSubmit={handleSubmit}>
        <SignUpFormInput type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
        <SignUpFormInput type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <SignUpFormInput type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} onBlur={validatePassword} />
        <StyledReCAPTCHA
          sitekey="6Ld0Cq0pAAAAAF3SidWDTypsWctA9u5Bz1lxZEcB"
          onChange={handleCaptchaChange}
        />
        <TextButton text="Sign Up" onClick={handleSubmit} />
      </StyledSignUpForm>
    </SignUpFormContainer>
  );
};

export default SignUpForm;