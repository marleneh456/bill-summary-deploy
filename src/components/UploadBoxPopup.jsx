import React from 'react'; // Import React library
import UploadBox from './UploadBox'; // Import the UploadBox component

function UploadBoxPopup({ onGenerateSummary, closePopup }) {
  return (
    <div className="popup-overlay">
      {/* The content of the popup */}
      <div className="popup-content">
        {/* Close button */}
        <button className="close-popup" onClick={closePopup}>
          &times; {/* The &times; represents the close (X) icon */}
        </button>

        {/* Title of the popup */}
        <h4>Get Started: Select your bill XML file</h4>

        {/* Render the UploadBox component, passing the onGenerateSummary function */}
        <UploadBox onGenerateSummary={onGenerateSummary} />
      </div>
    </div>
  );
}

export default UploadBoxPopup; // Export the component to be used in other parts of the application
