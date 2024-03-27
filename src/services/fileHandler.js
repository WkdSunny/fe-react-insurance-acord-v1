import React, { useState } from "react";

const [files, setFileList] = useState([]);

export function fileRemove(file, files) {
  const updatedList = files.filter((item) => item !== file);
  setFileList(updatedList);
  props.onFileChange(updatedList);
};