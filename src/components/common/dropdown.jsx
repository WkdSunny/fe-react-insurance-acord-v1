import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "./hamburger";

const DropdownContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const DropdownButton = styled.ul`
  display: ${({ open }) => open ? 'flex' : 'none'};
  flex-flow: column nowrap;
  list-style: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  padding-top: 25px;
  border-radius: 5px;
  max-width: 200px;
  background-color: var(--body-bg-1);
  box-shadow: var(--box-shadow-1);
  color: var(--txt-color-2);
  font-size: 0.8rem;
  cursor: pointer;
  transition: transform 0.3s ease-in-out; // Changed the duration to 0.3s
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(100%)'};
  z-index: 1;

  li {
    padding: 0.2rem 0.5rem;
    width: 100%;
    background-color: var(--body-bg-1);
    color: var(--txt-color-1);
  }

  li:hover {
    background-color: #f0f0f0;
    color: var(--txt-color-2);
    text-shadow: var(--txt-shadow-1);
  }
`;

function Dropdown({ ddList, ddStyle = DropdownStyle.Hamburger }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(prevOpen => !prevOpen);

  return (
    <DropdownContainer onClick={toggleOpen}>
      {ddStyle === "Hamburger" ? (
        <Hamburger />
      ) : (
        open ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />
      )}
      <DropdownButton open={open}>
        {ddList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </DropdownButton>
    </DropdownContainer>
  );
}

export const DropdownStyle = {
  Hamburger: "Hamburger",
  Carets: "Carets",
};

export default Dropdown;