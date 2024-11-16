import React, { useState, useRef } from "react";

function ContactPage() {
  const [fileNames, setFileNames] = useState([]);
  const fileInputRef = useRef(null);

  // Function to handle file uploads and update the file names
  const handleFileChange = (event) => {
    const files = event.target.files;
    const names = Array.from(files).map((file) => file.name);
    setFileNames((prevFiles) => [...prevFiles, ...names]);
  };

  // Function to remove a specific file by name
  const removeFile = (fileName) => {
    const updatedFiles = fileNames.filter((file) => file !== fileName);
    setFileNames(updatedFiles);

    // Reset the file input field to synchronize with the list
    if (fileInputRef.current) {
      const dataTransfer = new DataTransfer();
      Array.from(fileInputRef.current.files)
        .filter((file) => file.name !== fileName)
        .forEach((file) => dataTransfer.items.add(file));

      fileInputRef.current.files = dataTransfer.files;
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>

      <div className="contact-form-container">
        <form className="contact-form">
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <label htmlFor="file">Attachments</label>
          <p className="upload-instructions">
            Allowed file types: jpg, jpeg, png, xml, txt, pdf, doc, docx, and less than 25MB.
          </p>
          <input
            type="file"
            id="file"
            name="file"
            multiple
            onChange={handleFileChange}
            ref={fileInputRef}
          />

          {/* Displaying the uploaded file names with red X buttons */}
          {fileNames.length > 0 && (
            <ul className="file-list">
              {fileNames.map((fileName, index) => (
                <li key={index} className="file-item">
                  {fileName}
                  <button
                    type="button"
                    className="remove-file-btn"
                    onClick={() => removeFile(fileName)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          )}

          <button type="submit">Send Message</button>
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
