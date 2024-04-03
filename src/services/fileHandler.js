import { useState } from "react";

export function useFileRemove(file, props) {
  const [fileList, setFileList] = useState([]);
  const updatedList = fileList.filter((item) => item !== file);
  setFileList(updatedList);
  props.onFileChange(updatedList);
};