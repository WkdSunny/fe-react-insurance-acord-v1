import React from 'react';
import Header from '../components/header';
import Body from '../components/body';
import Footer from '../components/footer';
import Auth from '../components/common/auth/auth';

export default function SignIn() {
  return (
    <div className="App">
      <Header />
      <Body>
        <Auth />
      </Body>
      <Footer />
    </div>
  );
}
