import React, { useState, useEffect } from 'react';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';

function SummaryPopup({ parsedText, closePopup, handleStartOver }) {
  const disclaimerText = `Disclaimer: Please note, that while our AI-powered summary aims to provide an accurate overview of this bill, the whatisnthebill.ai summary may not provide all pertinent topics or relevant details from within the bill. We encourage you to refer to the full text for a complete understanding of the bill. Thank you for using whatisinthebill.ai.\n\n`;

  const fullText = disclaimerText + parsedText; // Prepend disclaimer to parsed text
  const [animatedText, setAnimatedText] = useState(''); // Store progressively animated text
  const [index, setIndex] = useState(0); // Track the current character index in the typewriter effect
  const [isPaused, setIsPaused] = useState(false); // Track if the animation is paused
  const [isAnimationDone, setIsAnimationDone] = useState(false); // Track if animation is complete

  // Typewriter animation effect
  useEffect(() => {
    if (index < fullText.length && !isPaused) {
      const interval = setInterval(() => {
        setAnimatedText((prev) => prev + fullText[index]); // Add one character at a time to the animated text
        setIndex((prevIndex) => prevIndex + 1); // Increment the character index
      }, 50); // Speed of the typewriter effect
      return () => clearInterval(interval); // Cleanup interval on unmount or re-render
    }
    if (index === fullText.length) {
      setIsAnimationDone(true); // Mark animation as complete
    }
  }, [index, isPaused, fullText]);

  // Toggle play/pause of the typewriter animation
  const handlePausePlay = () => {
    setIsPaused((prev) => !prev); // Toggle pause state
  };

  // Function to download the parsed summary as a .docx file
  const handleDownloadDocx = () => {
    const lines = fullText.split('\n'); // Split the text by lines

    // Create a paragraph for each line
    const paragraphs = lines.map((line) =>
      new Paragraph({
        children: [
          new TextRun({
            text: line, // Add the line of text
            break: 1,   // Ensure it breaks lines properly
          }),
        ],
      })
    );

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: paragraphs, // Add paragraphs to the document
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

        <div className="summary-btns-container">
          {/* Download button */}
          <button className="download-btn" onClick={handleDownloadDocx}>
            <img
              src="./bill-summary-deploy/images/download.svg"
              alt="Download"
              style={{ width: '20px', marginRight: '8px', opacity: 0.6}} // Add opacity here
            />
            Download
          </button>

          {/* Restart button */}
          <button className="do-it-again-btn" onClick={handleStartOver}>
            <img
              src="./bill-summary-deploy/images/redo.svg"
              alt="Redo"
              style={{ width: '20px', marginRight: '8px'}} // Add opacity here
            />
            Summarize Another Bill
          </button>

          {/* Play/Pause button */}
          {!isAnimationDone && (
            <button className="pause-play-btn" onClick={handlePausePlay}>
              <img
                src={isPaused ? "./bill-summary-deploy/images/play.svg" : "./bill-summary-deploy/images/pause.svg"}
                alt={isPaused ? "Play" : "Pause"}
                style={{ width: '20px'}} // Add opacity here
              />
            </button>
          )}
        </div>

        {/* Close button */}
        <button className="close-popup" onClick={closePopup}>
          &#x2715; {/* Entity for multiplication sign (close icon) */}
        </button>
      </div>
    </div>
  );
}

export default SummaryPopup;
