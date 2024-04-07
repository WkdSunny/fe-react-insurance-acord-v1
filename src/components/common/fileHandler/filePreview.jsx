import React, { useState } from "react";
import styled from "styled-components";
import { UploadButton, DeleteButton, CheckButton } from "../buttons";
import { ImageConfig } from "../imageConfig";
import ExtractionHandler from "./extractionHandler";
import Success from "../success2";

const FilePreviewContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 10px;
  padding: 10px;
  color: var(--txt-color-2);
  border: 0.2rem dashed var(--txt-color-2-alt);
  border-radius: 10px;
`;

const FilePreviewHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;

  h3 {
    font-size: 1.5rem;
  }

  button {
    background-color: var(--txt-color-2);
    color: var(--body-bg-1);
    height: 2rem;
    width: 2rem;
    font-size: 1rem;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }

  button:hover {
    background-color: var(--txt-color-2);
    color: var(--body-bg-1);
  }
`;

const FilePreviewTitle = styled.h3`
  font-size: 1.5rem;
`;

const FilePreviewButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: right;
`;

const FilePreviewArea = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

const FilePreviewItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  background-color: var(--body-bg-1-alt);
  box-shadow: var(--box-shadow-black-bottom-right)

  &:hover {
    background-color: var(--hover-bg-1);
  }
`;

const FilePreviewInfo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    transition: 0.3s ease-in-out;
  }

  @media (max-width: 250px) {
    span {
      font-size: 5rem;
      transition: 0.5s ease-in-out;
    }
  }
`;

const FilePreviewInfoText = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  width: 100%;

  span {
    font-size: 1rem;
    font-weight: bold;
    color: var(--txt-color-1);
  }

  p {
    font-size: 0.75rem;
    color: var(--txt-color-1);
  }
`;

const FilePreviewActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    background-color: var(--txt-color-2);
    color: var(--body-bg-1);
    font-size: 0.7rem;
    height: 1.5rem;
    width: 1.5rem;
    opacity: 0.5;

    &:hover {
      opacity: 1;
  }
`;

function FilePreview(props) {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [isAPISuccess, setAPISuccess] = useState(false);


  const fileRemove = (file) => {
    console.log('Removing file:', file);
    console.log('Current files:', props.files);
    const updatedList = props.files.filter((item) => item !== file);
    props.onFileChange(updatedList);
    console.log('Updated files:', updatedList);
  };

  const fileRemoveAll = (filesToRemove) => {
    const updatedList = props.files.filter((file) => !filesToRemove.includes(file));
    props.onFileChange(updatedList);
  };

  const uploadFiles = async (files) => {
    // setAPISuccess(false);
    setIsLoading(true);
    setFiles(files);
  }

  return (
    <FilePreviewContainer>
      {isLoading && <ExtractionHandler files={files} isLoading={isLoading} setIsLoading={setIsLoading} />} {/*isAPISuccess={isAPISuccess} setAPISuccess={setAPISuccess} />*/}
      {/* {isAPISuccess && <Success />} */}
      <FilePreviewHeader>
        <FilePreviewTitle>Ready to upload...</FilePreviewTitle>
        <FilePreviewButtonContainer>
          <UploadButton onClick={() => uploadFiles(props.files)} />
          <DeleteButton onClick={() => fileRemoveAll(props.files)} />
        </FilePreviewButtonContainer>
      </FilePreviewHeader>
      <FilePreviewArea>
        {props.files.map((file, index) => (
          <FilePreviewItem key={index}>
            <FilePreviewInfo>
              <img src={ImageConfig[file.type.split('/')[1]] || ImageConfig['default']} alt={file.type} />
                <FilePreviewInfoText>
                  <span>{file.name}</span>
                  <p>{(file.size/1024).toFixed(2)} KB</p>
                </FilePreviewInfoText>
                <FilePreviewActionButtons>
                  <CheckButton onClick={() => uploadFiles(file)} />
                  <DeleteButton onClick={() => fileRemove(file)} />
                </FilePreviewActionButtons>
            </FilePreviewInfo>
          </FilePreviewItem>
        ))}
      </FilePreviewArea>
    </FilePreviewContainer>
  );
}

export default FilePreview;