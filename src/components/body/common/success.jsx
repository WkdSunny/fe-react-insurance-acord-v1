import React from "react";
import styled from "styled-components";
import SuccessIcon from "../../assets/icon-check-circle.png";

const SuccessContainer = styled.div`
  position: absolute,
  top: 0,
  left: 0,
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  backgroundColor: rgba(255, 255, 255, 0.8),
  zIndex: 9999,
`;

const SuccessIconImg = styled.img`
  padding: 20px;
  margin-bottom: 25px;
  height: 100px;
  width: 100px;
  animation: appear 4s linear infinite;

  @keyframes appear {
    0% {transform: scale(.5);}
    25% {transform: scale(2);}
    50% {transform: scale(2.5);}
    75% {transform: scale(2);}
  }

  @media only screen and (max-width: 480px) {
    height: 75px;
    width: 74px;
  }
`;

const SuccessText = styled.span`
  font-size: 1.5em;
  color: var(--txt-second-color);
  font-weight: bold;

  @media only screen and (max-width: 480px) {
    font-size: 1.2em;
  }
`;

const ReloadText = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: var(--button-bg);
  border-radius: 5px;
  font-size: 1rem;
  color: var(--txt-third-color);
  margin-top: 20px;
  cursor: pointer;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);

  .new-icon {
    margin-right: 10px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  @media only screen and (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.8rem;

    .new-icon {
      margin-right: 8px;
      font-size: 1rem;
    }
  }
`;

function Success() {
  const successStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 9999,
  };

  return (
    <SuccessContainer style={successStyle}>
      <SuccessIconImg src={SuccessIcon} alt="Success Icon" />
      <SuccessText>Success...</SuccessText>
      <ReloadText type="submit">
        New project...
      </ReloadText>
    </SuccessContainer>
  );
}

export default Success;