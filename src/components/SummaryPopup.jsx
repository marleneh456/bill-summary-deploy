import React, { useState, useEffect } from 'react'; // Import necessary hooks from React
import { Document, Packer, Paragraph, TextRun } from 'docx'; // Import document creation tools from docx
import { saveAs } from 'file-saver'; // Import file saving function from file-saver

function SummaryPopup({ parsedText, closePopup, handleStartOver }) {
  const [animatedText, setAnimatedText] = useState(''); // Store progressively animated text
  const [index, setIndex] = useState(0); // Track the current character index in the typewriter effect
  const [isPaused, setIsPaused] = useState(false); // Track if the animation is paused
  const [isAnimationDone, setIsAnimationDone] = useState(false); // Track if animation is complete

  // Typewriter animation effect using useEffect
  useEffect(() => {
    if (index < parsedText.length && !isPaused) {
      const interval = setInterval(() => {
        setAnimatedText((prev) => prev + parsedText[index]); // Add one character at a time to the animated text
        setIndex((prevIndex) => prevIndex + 1); // Increment the character index
      }, 50); // Speed of the typewriter effect
      return () => clearInterval(interval); // Cleanup interval on unmount or re-render
    }

    if (index === parsedText.length) {
      setIsAnimationDone(true); // Mark animation as complete
    }
  }, [index, isPaused, parsedText]);

  // Toggle play/pause of the typewriter animation
  const handlePausePlay = () => {
    setIsPaused((prev) => !prev); // Toggle pause state
  };

  // Function to download the parsed summary as a .docx file
  const handleDownloadDocx = () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [new TextRun(parsedText)], // Insert the parsed text into the document
            }),
          ],
        },
      ],
    });
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, 'summary.docx'); // Save the document as 'summary.docx'
    });
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Here is the generated summary</h2>

        {/* Scrollable summary box */}
        <div className="summary-box">
          <pre className="summary-box-pre">
            {animatedText}
            {!isAnimationDone && <span className="blinking-cursor">|</span>} {/* Blinking cursor during animation */}
          </pre>
        </div>

        <div className="upload-btn-container">
          {/* Download, Restart, Play/Pause buttons */}
          <button className="upload-btn" onClick={handleDownloadDocx}>
            <i className="fas fa-download"></i> Download
          </button>
          <button className="upload-btn" onClick={handleStartOver}>
            <i className="fas fa-redo"></i><br /> Do it again
          </button>
          {!isAnimationDone && (
            <button className="upload-btn icon-only" onClick={handlePausePlay}>
              {isPaused ? <i className="fas fa-play"></i> : <i className="fas fa-pause"></i>}
            </button>
          )}
        </div>

        {/* Close button for the popup */}
        <button className="close-popup" onClick={closePopup}>
          &times;
        </button>
      </div>
    </div>
  );
}

export default SummaryPopup; // Export the component for use in other parts of the app
