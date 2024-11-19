import React from 'react'; // Import React library
import LoadingSpinner from './LoadingSpinner'; // Import the LoadingSpinner component

// Add 'closePopup' as a prop
function LoadingPopup({ closePopup }) {
  return (
    // Creates a div that serves as the overlay for the popup
    <div className="popup-overlay">
      {/* Popup content container */}
      <div className="popup-content">
        {/* Close button */}
        <button className="close-popup" onClick={closePopup}>
          <img
            src="./bill-summary-deploy/images/close-icon.svg"
            alt="Close"
            style={{ width: '20px' }}
          />
        </button>

        {/* Renders the loading spinner component inside the popup */}
        <LoadingSpinner />
      </div>
    </div>
  );
}

export default LoadingPopup; // Export the component for use in other parts of the application
