import getPrompt from "../llmPrompts/prompts";

const extraction = async (files) => {
  try {
    const formData = new FormData();
    if (Array.isArray(files)) {
      files.forEach((file, index) => {
        formData.append('file', file);
      });
    } else {
      formData.append('file', files);
    }

    const response = await fetch('http://127.0.0.1:5000/extract', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      // File uploaded successfully
      console.log('File uploaded successfully');
      const data = await response.json();
      console.log(JSON.stringify(data));

      // Call the LLM API
      // console.log(getPrompt(data).prompt.replace(/\n\s*/g, '\n'));
      const llmResponseData = await llmResponse(getPrompt(data).prompt.replace(/\n\s*/g, '\n'));
      console.log(llmResponseData);

    } else {
      // Error uploading file
      console.error('Error uploading file');
    }
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}

const llmResponse = async (text) => {
  try {
    const data = {
      prompt: text,
    };

    console.log('API call started');

    const response = await fetch('http://127.0.0.1:5000/oscar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      // mode: 'no-cors' // Add this line to disable CORS
    });

    if (response.ok) {
      // API call successful
      console.log('API call successful');

      const responseData = await response.json();
      console.log(responseData);

      // Process the response data here

    } else {
      // Error making API call
      console.error('Error making API call');
    }
  } catch (error) {
    console.error('Error making API call:', error);
  }
};

export default extraction;