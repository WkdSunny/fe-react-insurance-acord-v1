import React, { useState } from "react";
import styled from "styled-components";

const HamburgerContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  padding: 7.5px 5px;
  margin-top: 5px;
  background-color: var(--body-bg-1);
  border-radius: 0.25rem;
  box-shadow: var(--box-shadow-black-bottom-right);
  position: absolute;
  right: ${({ open }) => open ? '15px' : '10px'};
  z-index: 9999;

  &:hover {
    background-color: var(--body-bg-2);
    color: var(--txt-color-3);

    div {
      background-color: var(--body-bg-1);
    }
  }

  div:nth-child(1) {
    transform: ${({ open }) => open ? 'rotate(45deg) translate(23%, 100%)' : 'none'};
  }

  div:nth-child(2) {
    opacity: ${({ open }) => open ? '0' : '1'};
  }

  div:nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg) translate(23%, -100%)' : 'none'};
  }
`;

const HamburgerLine = styled.div`
  width: 17px;
  height: 3px;
  margin: 1px;
  border-radius: 0.25rem;
  background-color: var(--body-bg-2);
  transition: all 0.3s ease-in-out;
`;

function Hamburger() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  return (
    <HamburgerContainer open={open} onClick={toggleOpen}>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
    </HamburgerContainer>
  );
}

export default Hamburger;
