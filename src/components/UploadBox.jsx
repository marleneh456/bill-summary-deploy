import React, { useState } from "react";

function UploadBox({ onGenerateSummary }) {
  const [file, setFile] = useState(null); // State to keep track of the uploaded file
  const [text, setText] = useState(""); // State to keep track of the input text

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

  // Function to clear the selected file
  const clearSelectedFile = () => {
    setFile(null); // Resets the selected file state
    document.getElementById("file-input").value = ""; // Resets the file input field
  };

  return (
    <div className="upload-container">
      {/* Always show the title and instructions */}
      <h3>Upload Your Bill to be Summarized by Our AI</h3>

      {/* Conditionally render the upload input or the file selected message */}
      {!file ? (
        <div className="upload-dropzone">
          <p>Drag and drop xml file here or click to select</p>
          <input
            id="file-input" // Add an ID to reference the input field
            type="file"
            accept=".xml" // Restrict file input to only accept XML files
            onChange={handleFileChange} // Handles file selection
            className="file-input"
          />
        </div>
      ) : (
        // Show the file info and "Generate Summary" button if a file is selected
        <div className="file-selected-container">
          <div className="file-selected">
            Selected File: {file.name}
            <button onClick={clearSelectedFile} className="remove-btn">
              &times; {/* Button to clear the selected file */}
            </button>
          </div>
        </div>
      )}

      {/* Text area for direct text input */}
      <div className="text-input">
        <h3>Or Enter Text to Summarize</h3>
        <textarea
    placeholder="Enter text here..."
    value={text}
    onChange={(e) => setText(e.target.value)}
    className="text-box"
/>

      </div>

      {/* Always show the "Generate Summary" button, but only enable it when a file is selected */}
      <button
        onClick={handleFileUpload}
        className="upload-btn"
        disabled={!file}
      >
        Generate Summary
      </button>
    </div>
  );
}

export default UploadBox; // Exports the component to be used in other parts of the app