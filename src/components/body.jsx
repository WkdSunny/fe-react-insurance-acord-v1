import React from "react";
import styled from "styled-components";

const BodyContainer = styled.div `
  flex: 1;
  background-color: var(--body-bg-1);
  color: var(--txt-color-1);
  box-shadow: var(--box-shadow-1);
  transition: all 0.5s ease-in-out;
`

export default function Body(props) {

  return (
    <BodyContainer>
      {props.children}
    </BodyContainer>
  );
}