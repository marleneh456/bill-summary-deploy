import React, { useState } from "react";

function ContactPage() {
  const [files, setFiles] = useState([]); // Store actual file objects

  // Function to handle file uploads via drag-and-drop or file input
  const handleFileUpload = (newFiles) => {
    const uniqueFiles = Array.from(newFiles).filter(
      (newFile) => !files.some((existingFile) => existingFile.name === newFile.name)
    );

    if (files.length + uniqueFiles.length > 3) {
      alert("You can only upload up to 3 files.");
      return;
    }

    setFiles((prevFiles) => [...prevFiles, ...uniqueFiles]);
  };

  // Function to handle drag-and-drop events
  const handleDrop = (event) => {
    event.preventDefault();
    const newFiles = event.dataTransfer.files;
    handleFileUpload(newFiles);
  };

  // Function to handle file input change
  const handleFileChange = (event) => {
    const newFiles = event.target.files;
    handleFileUpload(newFiles);
  };

  // Function to remove a specific file by name
  const removeFile = (fileName) => {
    const updatedFiles = files.filter((file) => file.name !== fileName);
    setFiles(updatedFiles);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>

      <div className="contact-form-container">
        <form className="contact-form">
          <label htmlFor="fname">
            First Name <span className="required">*</span>
          </label>
          <input type="text" id="fname" name="firstname" placeholder="Frist Name" required />

          <label htmlFor="lname">
            Last Name <span className="required">*</span>
          </label>
          <input type="text" id="lname" name="lastname" placeholder="Last Name" required />

          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
          <input type="email" id="email" name="email" placeholder="name@example.com" required />
          
          <label>Attachments</label>
          <p className="upload-instructions">
            Allowed file types: jpg, jpeg, png, xml,
            txt, pdf, doc, docx, and less than 25MB.
          </p>

          <p className="upload-instructions">
            You can upload up to 3 files.
          </p>

          {/* Dropzone for uploading files */}
          <div
            className="dropzone"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => document.getElementById("file-input").click()}
          >
            <p>Drag and drop files here or click to select</p>
          </div>

          {/* Hidden file input for click-to-upload */}
          <input
            type="file"
            id="file-input"
            name="file"
            multiple
            className="file-input-hidden"
            onChange={handleFileChange}
          />

          {/* Displaying the uploaded file names with red X buttons */}
          {files.length > 0 && (
            <ul className="file-list">
              {files.map((file, index) => (
                <li key={index} className="file-item">
                  {file.name}
                  <button
                    type="button"
                    className="remove-file-btn"
                    onClick={() => removeFile(file.name)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          )}

          <label htmlFor="message">
            Message <span className="required">*</span>
          </label>
          <textarea id="message" name="message" rows="4" placeholder="Leave us a message..." required></textarea>

          <button type="submit" className="send-button">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <h3>Location</h3>
          <p>Nashville, TN</p>

          <h3>Email</h3>
          <p>admin@whatsinthebill.ai</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
