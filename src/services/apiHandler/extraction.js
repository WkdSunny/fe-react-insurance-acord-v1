export const Extraction = async (files) => {
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
      const data = await response.json();

      return data;
    } else {
      console.error('Error uploading file');
    }
  } catch (error) {
    console.error('Error processing file:', error);
  }
}

export const llmResponse = async (text) => {
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
      // console.log(responseData);
      return responseData;

      // Process the response data here


    } else {
      // Error making API call
      console.error('Error making API call');
    }
  } catch (error) {
    console.error('Error making API call:', error);
  }
};