import React from 'react';
import UploadBox from './UploadBox';

function UploadBoxPopup({ onGenerateSummary, closePopup }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-popup" onClick={closePopup}>
          &times;
        </button>
        <h3>Get Started: Select your bill XML file</h3>
        <UploadBox onGenerateSummary={onGenerateSummary} />
      </div>
    </div>
  );
}

export default UploadBoxPopup;
