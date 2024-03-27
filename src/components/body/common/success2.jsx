import styled from "styled-components";

const SuccessContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-weight: bold;
  color: var(--txt-color-2-alt);
  height: 100%;

  button {
    margin-top: 20px;
    width: 100%;
  }
`;

const SuccessArea = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 30%;
  background-color: var(--hover-bg-1);
  color: var(--txt-color-2);
  height: 30vh;
  width: 30vh;

  @media (max-width: 400px) {
    height: 20vh;
    width: 20vh;
  }
`;

const SuccessIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
  color: var(--txt-color-2);
  animation: appear 4s linear infinite;

  @keyframes appear {
    0% {transform: scale(.5);}
    25% {transform: scale(2);}
    50% {transform: scale(2.5);}
    75% {transform: scale(2);}
  }
  
  &:hover {
    transform: scale(1.2); // Add this line
  }

  @media (max-width: 400px) {
    font-size: 5rem;
  }
`;

const SuccessText = styled.div`
  margin-top: 15px;
  font-size: 1.5rem;
  color: var(--txt-color-2);
`;

const Success = () => {
  return (
    <SuccessContainer>
      <SuccessArea>
        <SuccessIcon>&#10004;</SuccessIcon>
      </SuccessArea>
      <SuccessText>Success...</SuccessText>
    </SuccessContainer>
  );
};

export default Success;