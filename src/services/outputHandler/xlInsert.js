const ExcelJS = require('exceljs');

export default async function insertDataIntoExcel(responseData) {
  try {
    // Create a new workbook
    const workbook = new ExcelJS.Workbook();

    // Add a new worksheet
    const worksheet = workbook.addWorksheet('Data');
    console.log('Inserting data into Excel...')
    // Insert the data into the worksheet
    worksheet.columns = [
      { header: 'Items', key: 'column1', width: 10 },
      { header: 'Values', key: 'column2', width: 10 },
      // Add more columns as needed
    ];

    // Insert the data rows
    function handleNestedData(data, path = '') {
      if (typeof data === 'object' && data !== null) {
        for (let key in data) {
          handleNestedData(data[key], `${path}${path ? '.' : ''}${key}`);
        }
      } else {
        const rowData = {
          column1: path,
          column2: data
        };
        worksheet.addRow(rowData);
      }
    }
  
    handleNestedData(responseData);
    console.log('Data inserted into Excel...')

    return workbook;
  } catch (error) {
    console.error('Error inserting data into Excel:', error);
  }
}

export const downloadExcelFile = async (workbook, originalFileName) => {
  try {
    // Write the workbook to a buffer
    const buffer = await workbook.xlsx.writeBuffer();

    // Create a Blob from the buffer
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    // Create a URL from the Blob
    const url = URL.createObjectURL(blob);

    // Create a link element
    const link = document.createElement('a');
    link.href = url;

    // Format the timestamp
    const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, '').replace('T', '-').replace('Z', '.000');
    const formattedTimestamp = timestamp.slice(0, 8) + '-' + timestamp.slice(8, 14);

    // Create the file name
    const fileName = `${originalFileName}_${formattedTimestamp}.xlsx`;

    // Set the download attribute of the link
    link.download = fileName;

    // Trigger the download
    link.click();
  } catch (error) {
    console.error('Error downloading Excel file:', error);
  }
}

// Usage
// downloadExcelFile(workbook, 'file');

// function nestedObjectHandler(obj, callback) {
//   const result = [];
//   for (const key in obj) {
//     if (Array.isArray(obj[key])) {
//       obj[key].forEach((item, index) => {
//       result.push({ column1: `${key}[${index}]`, column2: item });
//       });
//     } else if (typeof obj[key] === 'object') {
//       nestedObjectHandler(obj[key], callback);
//     } else {
//       result.push({ column1: key, column2: obj[key] });
//     }
//   }
//   return result;
// }