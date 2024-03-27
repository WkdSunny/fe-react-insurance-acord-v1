import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: var(--body-bg-2);
  border-bottom: 1px solid #e1e1e1;
  
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  img {
    border-radius: 5px;
    margin-right: 1rem;
    width: 60%;
  }

  span {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--txt-color-3);
    display: inline-block;
    align-items: center;
  }

  @media (max-width: 480px) {
    img {
      Animation: 0.3s linear ease-in-out;
    }
    span {
      font-size: .8rem;
      Animation: 0.3s linear ease-in-out;
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <a href="https://www.clik.ai/">
        <img className="clik-logo" alt="clik.ai_logo" loading="lazy" src="https://assets-global.website-files.com/62682581fd294248d122bd0a/62682581fd29427a3e22bd88_Screen%20Shot%202022-01-29%20at%209.16.53%20PM.png"></img>
      </a>
    </HeaderContainer>
  );
}

export default Header;