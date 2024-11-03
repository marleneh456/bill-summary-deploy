import React, { useState, useEffect } from "react"; // Import React, and the hooks useState and useEffect

function AboutPage() {

  return (
    <div className="about-page">
      {/* About Section */}
      <section className="about-company">
        <h1>About the Project</h1>
        <p className="about-description">
          The Bill Summary API is an innovative platform designed to streamline
          the process of analyzing and summarizing U.S. congressional bills. Our
          goal is to provide concise, AI-driven summaries that break down
          complex legal documents into easy-to-understand language. Leveraging
          Google’s T5-small language model, this project is designed to assist
          legislators, voters, and the public by making legislative processes
          more transparent and accessible.
        </p>
      </section>

      {/* Technologies Section */}
      <section className="technologies">
        <h2>Technologies Used</h2>
        <div className="tech-grid">
          {/* Technology cards */}
          <div className="tech-card">
            <img
              src="./bill-summary-deploy/images/ai.png"
              alt="Google T5 Small"
              className="tech-icon"
            />
            <h4>Google T5-Small Model</h4>
            <p>AI for Summarization</p>
          </div>
          <div className="tech-card">
            <img src="./bill-summary-deploy/images/react.png" alt="React" className="tech-icon" />
            <h4>React</h4>
            <p>Frontend Development</p>
          </div>
          <div className="tech-card">
            <img src="./bill-summary-deploy/images/flask.jpg" alt="Flask" className="tech-icon" />
            <h4>Flask</h4>
            <p>Backend Development</p>
          </div>
          <div className="tech-card">
            <img src="./bill-summary-deploy/images/api.png" alt="REST API" className="tech-icon" />
            <h4>REST API</h4>
            <p>Web-based API</p>
          </div>
        </div>
      </section>

      {/* Go to Top Button */}
      {showTopBtn && (
        <button className="go-top-btn" onClick={scrollToTop}>
          &uarr; {/* Use upwards arrow symbol */}
        </button>
      )}
    </div>
  );
}

export default AboutPage; // Export the component for use in other parts of the app