import React from 'react'; // Imports React library to create components
import LoadingSpinner from './LoadingSpinner'; // Imports a child component that will display the loading spinner

function LoadingPopup() {
  return (
    // Creates a div that serves as the overlay for the popup
    <div className="popup-overlay">
      {/* Popup content container */}
      <div className="popup-content">
        {/* Renders the loading spinner component inside the popup */}
        <LoadingSpinner />
      </div>
    </div>
  );
}

export default LoadingPopup; // Exports the component for use in other parts of the application
