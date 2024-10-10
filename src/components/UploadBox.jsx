
import React, { useState } from 'react';

function UploadBox({ onGenerateSummary }) {
  const [file, setFile] = useState(null); // State to hold the uploaded file

  // Function to handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Update state with the selected file
  };

  // Function to handle file upload
  const handleFileUpload = () => {
    if (file) {
      onGenerateSummary(file); // Pass the file to generate summary
    } else {
      console.log("No file selected."); // Log message if no file is selected
    }
  };

  return (
    <div className="upload-container">
	{/* Title and instructions */}
      <h3>Upload Your Bill</h3>
      <p>Upload your bill to be summarized by AI</p>

      {/* Dropzone for file upload */}
      <div className="upload-dropzone">
        <p>Choose File to upload</p>
        <input
          type="file"
          accept=".xml" // Accept only XML files
          onChange={handleFileChange} // Handle file selection
          className="file-input"
        />
        {/* Display selected file information */}
        {file && (
          <div className="file-selected">
            Selected File: {file.name}
            <button onClick={() => setFile(null)} className="remove-btn">
              &times; {/* Button to remove selected file */}
            </button>
          </div>
        )}
      </div>

      {/* Button to trigger file upload */}
      <button onClick={handleFileUpload} className="upload-btn">
        Generate Summary
      </button>
    </div>
  );
}

export default UploadBox;
