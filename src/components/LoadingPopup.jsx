import React from 'react';
import LoadingSpinner from './LoadingSpinner';

function LoadingPopup() {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <LoadingSpinner />
      </div>
    </div>
  );
}

export default LoadingPopup;
