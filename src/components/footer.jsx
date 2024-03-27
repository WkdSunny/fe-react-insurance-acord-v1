import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer `
  background-color: var(--body-bg-2);
  color: var(--txt-color-3);
  font-size: .6em;
  padding: 1vh 2.5vh;
  text-align: right;
  margin-top: auto;
  height: auto;
`

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; All rights reserved - Clik Technologies INC [2023-24]</p>
    </FooterContainer>
  );
}

export default Footer;