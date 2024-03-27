import React, { useRef } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { faCloudUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DragDropContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-weight: bold;
  color: var(--txt-color-2-alt);
  height: 100%;

  &:hover, &.dragover{
    background-color: var(--hover-bg-1);
    border-radius: 10px;
    opacity: 0.8;
  }
`;

const DragDropArea = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border: 0.2rem dashed var(--txt-color-2-alt);
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  span {
    font-size: 10rem;
  }

  p {
    font-size: 1.2rem;
    text-align: center;
  }

  input {
    width: 100%;
    height: 100%;
    cursor: pointer;
    position: absolute;
    cursor: pointer;
    opacity: 0;
  }

  @media (max-width: 250px) {
    span {
      font-size: 5rem;
      transition: 0.5s ease-in-out;
    }

    p {
      font-size: 1rem;
      transition: 0.5s ease-in-out;
    }
  }

  @media (max-width: 768px) {
    span {
      transition: 0.5s ease-in-out;
    }

    p {
      transition: 0.5s ease-in-out;
    }
  }
`;

function DragDrop(props) {
  const wrapperRef = useRef(null);
  const fileInputRef = useRef(null);

  const onDragEnter = (e) => {
    wrapperRef.current.classList.add('dragover');
    e.preventDefault();
  }

  const onDragLeave = (e) => {
    wrapperRef.current.classList.remove('dragover');
    e.preventDefault();
  }

  const onDrop = (e) => {
    wrapperRef.current.classList.remove('dragover');
    e.preventDefault();
  }

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.target.files);
    if (newFiles.length > 0) {
      const updatedList = [...props.files, ...newFiles];
      props.onDrop(updatedList);
    }
    // Clear the file input
    fileInputRef.current.value = null;
  };

  return (
    <DragDropContainer
      ref={wrapperRef}
      onDrop={onDrop}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
    >
      <DragDropArea>
        <span><FontAwesomeIcon icon={faCloudUpload} /></span>
        <span><p>Drag & drop files here...</p></span>
        <input type="file" onChange={handleDrop} multiple ref={fileInputRef} />
      </DragDropArea>
    </DragDropContainer>
  );
}

DragDrop.propTypes = {
  onDrop: PropTypes.func.isRequired,
};

export default DragDrop;