import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Extraction, llmResponse } from '../../../services/apiHandler/extraction';
import { getPrompt } from '../../../services/llmPrompts/prompts';
import insertDataIntoExcel, { downloadExcelFile } from '../../../services/outputHandler/xlInsert';
import Loader from '../loader';
import Success from '../success2';

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: var(--body-bg-1-transparent-75);
  z-index: 9999;
`;

export default function ExtractionHandler({ files, isLoading, setIsLoading, isAPISuccess, setAPISuccess }) {
  const [message, setMessage] = useState('Uploading file...');
  // const [isAPISuccess, setAPISuccess] = useState(false);

  useEffect(() => {
    const performExtraction = async () => {
      setIsLoading(true);
      // setAPISuccess(false);
      try {
        const data = await Extraction(files);
        setMessage('File uploaded successfully!');

        let originalFileName = '';
        try {
          let llmResponseData = await llmResponse(getPrompt(data).prompt.replace(/\n\s*/g, '\n'));
          llmResponseData = llmResponseData.response;
          if (llmResponseData) {
            llmResponseData = JSON.parse(llmResponseData);
            if (
                llmResponseData['Borrowing Entity'] && 
                llmResponseData['Borrowing Entity'] !== '' 
                && llmResponseData['Borrowing Entity'].length > 0
              ) {
              originalFileName = llmResponseData['Borrowing Entity'].substring(0, 25).replace(/\s/g, '_');
            } else {
              originalFileName = 'output';
            }
            try {
              const workbook = await insertDataIntoExcel(llmResponseData)
              setMessage('Data inserted into Excel...');
              setIsLoading(false);
              setAPISuccess(true);
              try {
                downloadExcelFile(workbook, originalFileName);
                setMessage('File is ready to be downloaded...');
              } catch (error) {
                console.error('Error downloading Excel file:', error);
              }
            } catch (error) {
              console.error('Error inserting data into Excel:', error);
            }
        } else {
            console.error('Error in LLM response. Please try again.');
        }
        } catch (error) {
          console.error('Error in LLM response:', error);
        }

      } catch (error) {
        console.error('Error processing file:', error);
      }
    };
    performExtraction();
  }, [files, setIsLoading, setAPISuccess]);

  return (
    <>
      {isLoading ? <LoaderContainer><Loader messages={[message]} /></LoaderContainer> : null}
      {isAPISuccess ? <LoaderContainer><Success /></LoaderContainer> : null}
      {/* <SuccessHandler isAPISuccess={isAPISuccess} /> */}
    </>
  );
}

// function SuccessHandler(isAPISuccess) {
//   return (
//     <>
//       {isAPISuccess && <LoaderContainer><Success /></LoaderContainer>}
//     </>
//   );
// }