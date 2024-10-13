import React from 'react'; // Imports the React library

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      {/* Spinner animation container */}
      <div className="spinner"></div>
      
      {/* Loading text */}
      <p>Loading...</p>
      
      {/* Disclaimer message */}
      <h3>
        "Please note, that while our AI-powered summary aims to provide an accurate overview of this bill, 
        the whatsinthebill.ai summary may not provide all pertinent topics or relevant details from within 
        the bill. We encourage you to refer to the full text for a complete understanding of the bill. 
        Thank you for using whatsinthebill.ai."
      </h3>
    </div>
  );
}

export default LoadingSpinner; // Exports the component for use in other parts of the app
