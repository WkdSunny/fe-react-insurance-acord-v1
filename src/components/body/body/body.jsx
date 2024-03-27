// import React, { useState } from "react";
import styled from "styled-components";
// import FileUploader from "./fileUploader";
// import { Loader } from "../common/loader";
// import DragDrop from "../common/fileHandler/dragDrop";
// import FilePreview from "../common/fileHandler/filePreview";
// import Loader from "../common/loader";
// import Success from "../common/success";
import Success from "../common/success2";

const BodyContainer = styled.div `
  flex: 1;
  background-color: var(--body-bg-1);
  color: var(--txt-color-1);
  box-shadow: var(--box-shadow-1);
  transition: all 0.5s ease-in-out;
`

function Body() {

  return (
    <BodyContainer>
      {/* <Loader /> */}
      {/* <FileUploader /> */}
      <Success />
    </BodyContainer>
  );
}

export default Body;