import React from 'react';
import LoadingSpinner from './LoadingSpinner';

function LoadingPopup() {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <LoadingSpinner />
        <h3>
          "Please note, that while our AI-powered summary aims to provide an accurate overview of this bill, 
          the whatsinthebill.ai summary may not provide all pertinent topics or relevant details from within 
          the bill. We encourage you to refer to the full text for a complete understanding of the bill. 
          Thank you for using whatsinthebill.ai."
        </h3>
      </div>
    </div>
  );
}

export default LoadingPopup;
