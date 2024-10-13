import React, { useState, useEffect } from 'react';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';

function SummaryPopup({ parsedText, closePopup, handleStartOver }) {
  const [animatedText, setAnimatedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimationDone, setIsAnimationDone] = useState(false); // Track if animation is done

  // Typewriter animation for summary
  useEffect(() => {
    if (index < parsedText.length && !isPaused) {
      const interval = setInterval(() => {
        setAnimatedText((prev) => prev + parsedText[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 50);
      return () => clearInterval(interval);
    }

    if (index === parsedText.length) {
      setIsAnimationDone(true); // Mark animation as done
    }
  }, [index, isPaused, parsedText]);

  // Handle play/pause for typing animation
  const handlePausePlay = () => {
    setIsPaused((prev) => !prev);
  };

  // Download parsed summary as a .docx file
  const handleDownloadDocx = () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [new TextRun(parsedText)],
            }),
          ],
        },
      ],
    });
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, 'summary.docx');
    });
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Here is the generated summary</h2>

        {/* The summary text with scrollable box */}
        <div className="summary-box">
          <pre className="summary-box-pre">
            {animatedText}
            {/* Only show the blinking cursor if the animation is not finished */}
            {!isAnimationDone && <span className="blinking-cursor">|</span>}
          </pre>
        </div>

        <div className="upload-btn-container">
          {/* Button order: Download, Do it again, Play/Pause */}
          <button className="upload-btn" onClick={handleDownloadDocx}>
            <i className="fas fa-download"></i> Download
          </button>
          <button className="upload-btn" onClick={handleStartOver}>
            <i className="fas fa-redo"></i><br /> Do it again
          </button>
          {/* Hide the play/pause button when the animation is done */}
          {!isAnimationDone && (
            <button className="upload-btn icon-only" onClick={handlePausePlay}>
              {isPaused ? <i className="fas fa-play"></i> : <i className="fas fa-pause"></i>}
            </button>
          )}
        </div>

        <button className="close-popup" onClick={closePopup}>
          &times;
        </button>
      </div>
    </div>
  );
}

export default SummaryPopup;
