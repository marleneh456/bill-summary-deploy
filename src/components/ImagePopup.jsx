// ImagePopup.jsx

import React from 'react';

function ImagePopup({ isOpen, imageSrc, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="image-popup-overlay" onClick={onClose}>
      <div className="image-popup-content">
        <img src={imageSrc} alt="Instruction" className="popup-image" />
        <button className="image-close-popup" onClick={onClose}>
          <img
            src="./bill-summary-deploy/images/close-icon.svg"
            alt="Close"
            style={{ width: '20px' }}
          />
        </button>
      </div>
    </div>
  );
}

export default ImagePopup;
