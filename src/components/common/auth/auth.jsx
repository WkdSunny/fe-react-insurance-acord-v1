import React, { useState } from 'react';
import SignInForm from './signInForm';
import SignUpForm from './signUpForm';
import { TextButton } from '../buttons';
import styled from 'styled-components';

const AuthContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const AuthContainerInner = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow-black-bottom-right);

  @media (max-width: 350px) {
    width: 75%;
    padding: 0;
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none;
  border-radius: 0.25rem;
  background-color: var(--body-bg-1);
  color: var(--txt-color-2);
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.3s ease-in-out;

  & button {
    margin: 0.1rem;
    width: 150px;
  }

  @media (max-width: 350px) {
    padding-bottom: 2rem;
`;

const Auth = () => {
  const [activeTab, setActiveTab] = useState('signin');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <AuthContainer>
      <AuthContainerInner>
        <TabContainer>
          <TextButton text="Sign In" onClick={() => handleTabChange('signin')} />
          <TextButton text="Sign Up" onClick={() => handleTabChange('signup')} />
        </TabContainer>
        {activeTab === 'signin' && (
          <SignInForm />
        )}
        {activeTab === 'signup' && (
          <SignUpForm />
        )}
      </AuthContainerInner>
    </AuthContainer>
  );
};

export default Auth;
