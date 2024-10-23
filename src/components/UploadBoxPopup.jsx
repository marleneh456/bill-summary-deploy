import React from 'react'; // Import React library
import UploadBox from './UploadBox'; // Import the UploadBox component

function UploadBoxPopup({ onGenerateSummary, closePopup }) {
  return (
    <div className="popup-overlay">
      {/* The content of the popup */}
      <div className="popup-content">
        {/* Close button */}
        <button className="close-popup" onClick={closePopup}>
          &#x2715; {/* The #x2715 represents the close (X) icon */}
        </button>

        {/* Title of the popup */}
        <h3>Get Started: Select your bill XML file</h3>

        {/* Render the UploadBox component, passing the onGenerateSummary function */}
        <UploadBox onGenerateSummary={onGenerateSummary} />
      </div>
    </div>
  );
}

export default UploadBoxPopup; // Export the component to be used in other parts of the application
