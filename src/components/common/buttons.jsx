import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faRemove, faUpload, faTrashAlt, faHome, faCaretUp, faCaretDown, faFileAlt, faCommentDots,faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const ButtonContainer = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;
  margin: 0.25rem;
  height: 2.5rem;
  width: 2.5rem;
  border: none;
  border-radius: 0.25rem;
  background-color: var(--body-bg-1);
  color: var(--txt-color-2);
  font-size: 1.5rem;
  font-weight: 700;
  box-shadow: var(--box-shadow-black-bottom-right);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--body-bg-2);
    color: var(--txt-color-3);
  }
`;

const ButtonContainerWithText = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;
  margin: 0.25rem;
  height: 2rem;
  border: none;
  border-radius: 0.25rem;
  background-color: var(--body-bg-2);
  color: var(--txt-color-3);
  font-family: var(--txt-font-1);
  font-size: 1rem;
  font-weight: 700;
  box-shadow: var(--box-shadow-black-bottom-right);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--body-bg-1);
    color: var(--txt-color-2);
  }
`;

export function CheckButton({ onClick }) {
  return (
    <ButtonContainer onClick={onClick}>
      <span><FontAwesomeIcon icon={faCheck} /></span>
    </ButtonContainer>
  );
}

export function CutButton({ onClick }) {
  return (
    <ButtonContainer onClick={onClick}>
      <span><FontAwesomeIcon icon={faRemove} /></span>
    </ButtonContainer>
  );
}

export function UploadButton({ onClick }) {
  return (
    <ButtonContainer onClick={onClick}>
      <span><FontAwesomeIcon icon={faUpload} /></span>
    </ButtonContainer>
  );
}

export function DeleteButton({ onClick }) {
  return (
    <ButtonContainer onClick={onClick}>
      <span><FontAwesomeIcon icon={faTrashAlt} /></span>
    </ButtonContainer>
  );
}

export function HomeButton({ onClick }) {
  return (
    <ButtonContainer onClick={onClick}>
      <span><FontAwesomeIcon icon={faHome} /></span>
    </ButtonContainer>
  );
}

export function ExpandButton({ onClick }) {
  return (
    <ButtonContainer onClick={onClick}>
      <span><FontAwesomeIcon icon={faCaretUp} /></span>
    </ButtonContainer>
  );
}

export function CollapseButton({ onClick }) {
  return (
    <ButtonContainer onClick={onClick}>
      <span><FontAwesomeIcon icon={faCaretDown} /></span>
    </ButtonContainer>
  );
}

export function NewButton({ onClick }) {
  return (
    <ButtonContainer onClick={onClick}>
      <span><FontAwesomeIcon icon={faFileAlt} /></span>
    </ButtonContainer>
  );
}

export function Feedback({ onClick }) {
  return (
    <ButtonContainer onClick={onClick}>
      <span><FontAwesomeIcon icon={faCommentDots} /></span>
    </ButtonContainer>
  );
}

export function Support({ onClick }) {
  return (
    <ButtonContainer onClick={onClick}>
      <span><FontAwesomeIcon icon={faQuestionCircle} /></span>
    </ButtonContainer>
  );
}

export function TextButton({ text, onClick }) {
  return (
    <ButtonContainerWithText onClick={onClick}>
      <span>{text}</span>
    </ButtonContainerWithText>
  );
}