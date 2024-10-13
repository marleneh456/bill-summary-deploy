import React, { useState } from 'react'; // Import React and the useState hook

function UploadBox({ onGenerateSummary }) {
  const [file, setFile] = useState(null); // State to keep track of the uploaded file

  // Function to handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Sets the selected file to state
  };

  // Function to handle file upload
  const handleFileUpload = () => {
    if (file) {
      onGenerateSummary(file); // Passes the file to the parent component via the onGenerateSummary callback
    } else {
      console.log("No file selected."); // Logs a message if no file is selected
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
          accept=".xml" // Restrict file input to only accept XML files
          onChange={handleFileChange} // Handles file selection
          className="file-input"
        />
        {/* Conditionally render file name and a remove button if a file is selected */}
        {file && (
          <div className="file-selected">
            Selected File: {file.name} {/* Displays the selected file name */}
            <button onClick={() => setFile(null)} className="remove-btn">
              &times; {/* Button to clear the selected file */}
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

export default UploadBox; // Exports the component to be used in other parts of the app
