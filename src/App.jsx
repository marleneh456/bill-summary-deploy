import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UploadBox from './components/UploadBox';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import LoadingSpinner from './components/LoadingSpinner';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';

function App() {
  const [step, setStep] = useState(1); // Tracks the current step
  const [isLoading, setIsLoading] = useState(false); // State to track loading
  const [parsedText, setParsedText] = useState(''); // State to hold parsed XML text
  const [animatedText, setAnimatedText] = useState(''); // State to animate text (typing effect)
  const [index, setIndex] = useState(0); // Index for text animation
  const [isPaused, setIsPaused] = useState(false); // To pause and play typing animation
  const [intervalId, setIntervalId] = useState(null); // Store the interval ID to control the animation
  const [isPopupOpen, setIsPopupOpen] = useState(false); // To track the modal popup state

  // Function to parse the XML file into readable plain text
  const handleXMLParsing = (xmlFile) => {
    const reader = new FileReader();
    reader.onload = () => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(reader.result, 'application/xml');

      let extractedText = '';

      // Extract the title
      const title = xmlDoc.querySelector('dc\\:title')?.textContent || 'No title available';
      extractedText += `Title: ${title}\n\n`;

      // Extract the bill number, session, and congress
      const billNum = xmlDoc.querySelector('legis-num')?.textContent || 'No bill number';
      const session = xmlDoc.querySelector('session')?.textContent || 'No session information';
      const congress = xmlDoc.querySelector('congress')?.textContent || 'No congress information';
      extractedText += `Bill Number: ${billNum}\nSession: ${session}\nCongress: ${congress}\n\n`;

      // Extract sections and paragraphs
      const sections = xmlDoc.querySelectorAll('section');
      sections.forEach((section) => {
        const header = section.querySelector('header')?.textContent || 'No header';
        const text = section.querySelector('text')?.textContent || 'No text';
        extractedText += `Section: ${header}\n${text}\n\n`;

        // Extract paragraphs within sections
        const paragraphs = section.querySelectorAll('paragraph');
        paragraphs.forEach((paragraph) => {
          const enumValue = paragraph.querySelector('enum')?.textContent || '';
          const paragraphText = paragraph.querySelector('text')?.textContent || '';
          extractedText += `  ${enumValue} ${paragraphText}\n`;
        });
      });

      setParsedText(extractedText); // Set the parsed text in state
      setAnimatedText(''); // Reset the animated text to start blank
      setIndex(0); // Reset the index for the typing animation
      setIsLoading(false);
      setStep(4); // Move to the summary step
    };
    reader.readAsText(xmlFile); // Read the XML file as text
  };

  // Function to handle file upload and parse XML
  const handleGenerateSummary = (xmlFile) => {
    setIsPaused(false); // Ensure that the animation starts when the new summary is generated
    setIsLoading(true);
    setTimeout(() => {
      handleXMLParsing(xmlFile); // Parse XML after loading simulation
    }, 3000); // Simulate a 3-second loading time
  };

  // Typing animation effect for displaying the parsed text one character at a time
  useEffect(() => {
    if (step === 4 && !isPaused && index < parsedText.length) {
      if (intervalId) clearInterval(intervalId); // Clear any existing interval

      const newIntervalId = setInterval(() => {
        if (index < parsedText.length) {
          setAnimatedText((prev) => prev + parsedText[index]); // Add one character at a time
          setIndex((prevIndex) => prevIndex + 1); // Update the index
        } else {
          clearInterval(newIntervalId); // Clear interval when finished
        }
      }, 50); // 50ms delay for each character

      setIntervalId(newIntervalId); // Save the interval ID
    }

    // Clean up the interval on unmount or when finished
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [index, parsedText, step, isPaused]);

  // Function to toggle pause and play
  const handlePausePlay = () => {
    setIsPaused((prev) => !prev);
  };

  // Function to handle the download of the parsed text as a .docx file using the docx library
  const handleDownloadDocx = () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun(parsedText), // Add parsed text here
              ],
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, 'summary.docx');
    });
  };

  // Function to toggle the modal popup
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    setStep(2); // Move to upload step when popup opens
  };

  // Function to close popup and return to Welcome (Step 1)
  const closePopup = () => {
    setIsPopupOpen(false);
    setStep(1); // Go back to step 1 (Welcome)
  };

  // Function to reset the animation and go back to the upload step
  const handleStartOver = () => {
    setParsedText(''); // Clear parsed text
    setAnimatedText(''); // Clear animated text
    setIndex(0); // Reset the index
    setIsPaused(false); // Resume animation
    setStep(2); // Move back to step 2 (upload)
  };

  return (
    <Router>
      <Navbar /> {/* Display the navbar across all pages */}
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {/* Step 1: Welcome statement */}
                <div className="welcome-section">
                  <h1  className="welcome-statement">Meet the AI that explains what the govt is actually doing</h1>
                  <p>Our AI directly summarizes official US govt bills to inform you, instead of confusing you.</p>
                  <button className="try-it-btn" onClick={togglePopup} className="upload-btn">
                    Try It Yourself!
                  </button>
                </div>

                {/* Modal Popup for the upload, spinner, and summary */}
                {isPopupOpen && (
                  <div className="popup-overlay">
                    <div className="popup-content">
                      <button className="close-popup" onClick={closePopup}>
                        &times;
                      </button>

                      {/* Step 2: Upload Box */}
                      {step === 2 && !isLoading && (
                        <div>
                          <h3>Get Started: Select your bill XML file</h3>
                          <UploadBox onGenerateSummary={handleGenerateSummary} />
                        </div>
                      )}

                      {/* Step 3: Loading Spinner */}
                      {isLoading && (
                        <div className="loading-spinner">
                          <LoadingSpinner />
                        </div>
                      )}

                      {/* Step 4: Generated summary with typing animation */}
                      {step === 4 && (
                        <div className="summary-box animated-summary">
                          <h2>Here is the generated summary</h2>
                          <pre className="summary-box-pre">
                            {animatedText}
                            <span className="blinking-cursor">|</span>
                          </pre>
                          <div className="upload-btn-container">
                            <button className="upload-btn" onClick={handleDownloadDocx}>
                              <i className="fas fa-download"></i> Download
                            </button>
                            <button className="upload-btn" onClick={handleStartOver}>
                              <i className="fas fa-redo"></i><br /> Do it again
                            </button>
                            <button className="upload-btn icon-only" onClick={handlePausePlay}>
                              <i id="playPauseIcon" className={isPaused ? 'fas fa-play' : 'fas fa-pause'}></i>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            }
          />

          <Route path="/contact" element={<ContactPage />} /> {/* Contact page */}
          <Route path="/about" element={<AboutPage />} /> {/* About page */}
        </Routes>
      </main>
      <Footer /> {/* Display the footer across all pages */}
    </Router>
  );
}

export default App;
