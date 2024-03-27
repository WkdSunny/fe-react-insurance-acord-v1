import React, { useState } from 'react';
import styled from "styled-components";
import DragDrop from "./dragDrop";
import FilePreview from "./filePreview";

const FileUploadContainer = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`

function FileUploader() {
  const [files, setFiles] = useState([]);
  const onFileChange = (newFiles) => {
    setFiles(newFiles);
  };

  return (
    <FileUploadContainer>
      <DragDrop files={files} onDrop={onFileChange} />
      {files.length > 0 ? (
        <FilePreview files={files} onFileChange={onFileChange} />
      ) : null}
    </FileUploadContainer>
  );
}

export default FileUploader;