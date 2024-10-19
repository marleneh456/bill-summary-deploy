import React from 'react'; // Imports the React library

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      {/* Spinner animation container */}
      <div className="spinner"></div>
      
      {/* Loading text */}
      <p>Loading...</p>
    </div>
  );
}

export default LoadingSpinner; // Exports the component for use in other parts of the app
