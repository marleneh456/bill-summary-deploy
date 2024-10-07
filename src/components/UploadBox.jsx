/* 
  The UploadBox component allows users to upload a file (specifically XML files) for summarization by AI. 
  It includes a drag-and-drop area as well as a file input for selecting files. 
  Users can see the name of the selected file and remove it if needed. 
  A button is provided to initiate the upload process, which currently logs the file name to the console.
*/
import React, { useState } from "react"; // Importing React and useState hook

function UploadBox() {
  const [file, setFile] = useState(null); // State to hold the uploaded file

  // Function to handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Update state with the selected file
  };

  // Function to allow dragging files over the drop zone
  const handleDragOver = (event) => {
    event.preventDefault(); // Prevent default behavior
  };

  // Function to handle file drop event
  const handleDrop = (event) => {
    event.preventDefault(); // Prevent default behavior
    const droppedFile = event.dataTransfer.files[0]; // Get the dropped file
    setFile(droppedFile); // Update state with the dropped file
  };

  // Function to handle file upload
  const handleFileUpload = () => {
    if (file) {
      console.log("Uploading file:", file.name); // Log the file name
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
      <div
        className="upload-dropzone"
        onDragOver={handleDragOver} // Handle drag-over event
        onDrop={handleDrop} // Handle drop event
      >
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
            Selected File: {file.name}{" "}
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
