import React from 'react';

function TextPopup({ isOpen, textContent, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="text-popup-overlay" onClick={onClose}>
      <div className="text-popup-content">
        <p>{textContent}</p>
        <button className="text-close-popup" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default TextPopup;
