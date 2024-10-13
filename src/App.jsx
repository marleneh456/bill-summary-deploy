// App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import UploadBoxPopup from './components/UploadBoxPopup';
import LoadingPopup from './components/LoadingPopup';
import SummaryPopup from './components/SummaryPopup';
import XMLParser from './components/XMLParser';  // For parsing XML and converting to .docx

function App() {
  const [step, setStep] = useState(1); // Track current step
  const [isLoading, setIsLoading] = useState(false); // Manage loading state
  const [parsedText, setParsedText] = useState(''); // Store parsed XML text
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Manage modal popup state

  // Function to toggle the modal popup
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    setStep(2); // Open upload step
  };

  // Function to handle closing the popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setStep(1); // Go back to welcome step
  };

  // Function to handle file upload and parsing
  const handleGenerateSummary = (xmlFile) => {
    setIsLoading(true); // Show loading spinner
    setTimeout(() => {
      XMLParser(xmlFile, setParsedText, setIsLoading, setStep); // Parse the XML file and update state
    }, 3000); // Simulate 3-second loading
  };

  // Function to reset and go back to the upload box (Step 2)
  const handleStartOver = () => {
    setParsedText(''); // Clear the parsed text
    setStep(2); // Go back to the upload box step
  };

  return (
    <Router>
      <Navbar />
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {/* Step 1: Welcome statement */}
                <div className="welcome-section">
                  <h1>Meet the AI that explains what the govt is actually doing</h1>
                  <p>Our AI directly summarizes official US govt bills to inform you, instead of confusing you.</p>
                  <button className="try-it-btn" onClick={togglePopup}>
                    Try It Yourself!
                  </button>
                </div>

                {/* Render popups conditionally based on step */}
                {isPopupOpen && (
                  <>
                    {step === 2 && !isLoading && (
                      <UploadBoxPopup onGenerateSummary={handleGenerateSummary} closePopup={closePopup} />
                    )}
                    {isLoading && <LoadingPopup />}
                    {step === 4 && <SummaryPopup parsedText={parsedText} closePopup={closePopup} handleStartOver={handleStartOver} />}
                  </>
                )}
              </div>
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

