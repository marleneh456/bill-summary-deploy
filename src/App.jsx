// Import necessary dependencies and components
import React, { useState } from 'react'; // React and useState for managing state
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Router for page navigation
import Navbar from './components/Navbar'; // Navigation bar component
import Footer from './components/Footer'; // Footer component
import ContactPage from './components/ContactPage'; // Contact page component
import AboutPage from './components/AboutPage'; // About page component
import UploadBoxPopup from './components/UploadBoxPopup'; // Component for the upload box modal
import LoadingPopup from './components/LoadingPopup'; // Component for showing a loading popup
import SummaryPopup from './components/SummaryPopup'; // Component to show the parsed summary
import XMLParser from './components/XMLParser';  // XML parsing function for handling files

// Main functional component for the app
function App() {
  // State management
  const [step, setStep] = useState(1); // Track the current step in the process (welcome, upload, etc.)
  const [isLoading, setIsLoading] = useState(false); // Show/hide loading spinner
  const [parsedText, setParsedText] = useState(''); // Store the result of the parsed XML
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Manage whether the popup is open or closed

  // Function to toggle the modal popup open and go to step 2 (upload)
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen); // Toggle the popup state
    setStep(2); // Set step to 2 (show upload step)
  };

  // Function to close the modal popup and return to step 1 (welcome)
  const closePopup = () => {
    setIsPopupOpen(false); // Close the popup
    setStep(1); // Go back to the welcome step
  };

  // Function to handle XML file upload and start parsing
  const handleGenerateSummary = (xmlFile) => {
    setIsLoading(true); // Start showing the loading spinner
    setTimeout(() => {
      // Simulate loading time before parsing the file
      XMLParser(xmlFile, setParsedText, setIsLoading, setStep); // Parse the XML file and update states
    }, 3000); // 3-second delay for the spinner to simulate a loading experience
  };

  // Function to reset the process and start over (go back to upload step)
  const handleStartOver = () => {
    setParsedText(''); // Clear the parsed text state
    setStep(2); // Go back to the upload step
  };

  return (
    <Router>
      <Navbar /> {/* Render the navigation bar */}
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Routes>
          {/* Define route for home page */}
          <Route
            path="/"
            element={
              <div>
                {/* Step 1: Welcome section */}
                <div className="welcome-section">
                <h1>Meet the AI that explains what the government is actually doing</h1>
                <p>Our AI directly summarizes official US government bills to inform you, instead of confusing you.</p>
              </div>

              {/* Main Content Layout */}
              <div className="content-container">
              {/* Left Column - Information Blocks */}
              <div className="info-section">
               <div className="info-block">
                <h4>mission statement</h4>
              </div>
			  
              <div className="info-block">
               <h4>Fema act </h4>
               <p>summary</p>
               <a href="#fema-link">link to bill</a>
              </div>
			  
             <div className="info-block">
              <h4>border act 2024</h4>
              <p>summary</p>
              <a href="#border-link">link to bill</a>
            </div>
			
          </div>

          {/* Right Column - Usage Instructions */}
          <div className="usage-section">
            <h3>How to use:</h3>
            <p>pick a bill you want to know about: congress.gov link</p>
            <p>only xml files work currently</p>
            <button className="try-it-btn" onClick={togglePopup}>
              Try It Yourself!
            </button>
          </div>
		  
        </div>

                {/* Conditionally render different steps or modals based on step */}
                {isPopupOpen && (
                  <>
                    {/* Step 2: Upload box if not loading */}
                    {step === 2 && !isLoading && (
                      <UploadBoxPopup onGenerateSummary={handleGenerateSummary} closePopup={closePopup} />
                    )}
                    {/* Step 3: Show loading spinner */}
                    {isLoading && <LoadingPopup />}
                    {/* Step 4: Show parsed summary */}
                    {step === 4 && <SummaryPopup parsedText={parsedText} closePopup={closePopup} handleStartOver={handleStartOver} />}
                  </>
                )}
              </div>
            }
          />
          {/* Define routes for other pages */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer /> {/* Render the footer */}
    </Router>
  );
}

export default App; // Export the App component as default
