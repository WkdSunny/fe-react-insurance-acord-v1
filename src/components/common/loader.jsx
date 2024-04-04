import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Loading = styled.div`
  font-family: "Arial Black", "Arial Bold", Gadget, sans-serif;
  text-transform:uppercase;

  width:150px;
  text-align:center;
  line-height:50px;

  position:absolute;
  left:0;right:0;top:50%;
  margin:auto;
  transform:translateY(-50%);

  span{
    position:relative;
    z-index:999;
    color:#fff;
  }

  &:before{
    content:'';
    background:#61bdb6;
    width:128px;
    height:36px;
    display:block;
    position:absolute;
    top:0;left:0;right:0;bottom:0;
    margin:auto;
    
    animation:2s loadingBefore infinite ease-in-out;
  }

  @keyframes loadingBefore{
    0%   {transform:translateX(-14px);}
    50%  {transform:translateX(14px);}
    100% {transform:translateX(-14px);}
  }

  &:after{
    content:'';
    background:#ff3600;
    width:14px;
    height:60px;
    display:block;
    position:absolute;
    top:0;left:0;right:0;bottom:0;
    margin:auto;
    opacity:.5;
    
    animation:2s loadingAfter infinite ease-in-out;
  }

  @keyframes loadingAfter{
    0%   {transform:translateX(-50px);}
    50%  {transform:translateX(50px);}
    100% {transform:translateX(-50px);}
  }
`;

export default function Loader(messages = ['Loading.', 'Loading..', 'Loading...', 'Loading....']) {
  // const messages = React.useMemo(() => ['Loading.', 'Loading..', 'Loading...', 'Loading....'], []);
  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    let messageIndex = 0;
    const intervalId = setInterval(() => {
      messageIndex = (messageIndex + 1) % messages.length;
      setCurrentMessage(messages[messageIndex]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [messages]);

  return (
    <Loading>
      <span>{currentMessage}</span>
    </Loading>
  );
}
