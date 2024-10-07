// Import React to create a functional component
import React from 'react';

// Define a functional component called LoadingSpinner
function LoadingSpinner() {
    // Return the JSX that defines what the loading spinner will look like
    return (
        // A div container that wraps the entire loading spinner component
        <div className="loading-spinner">
            {/* Another div to visually represent the spinning circle (styled with CSS) */}
            <div className="spinner"></div>
            
            {/* A paragraph element that displays the "Loading..." text */}
            <p>Loading...</p>
        </div>
    );
}

// Export the LoadingSpinner component so it can be used in other parts of the application
export default LoadingSpinner;
