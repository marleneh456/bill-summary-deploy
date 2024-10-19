import React, { useState, useEffect } from "react"; // Import React, and the hooks useState and useEffect

function AboutPage() {
  const [showTopBtn, setShowTopBtn] = useState(false); // State to control the visibility of the "Go to Top" button

  // Hook to handle the scroll event and show the button when user scrolls down
  useEffect(() => {
    const handleScroll = () => { // Function to check the scroll position
      if (window.pageYOffset > 300) { // If the scroll position is greater than 300px
        setShowTopBtn(true); // Show the "Go to Top" button
      } else {
        setShowTopBtn(false); // Hide the "Go to Top" button
      }
    };

    window.addEventListener("scroll", handleScroll); // Add event listener for scrolling
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup the event listener on component unmount
    };
  }, []); // Empty dependency array to only run on component mount/unmount

  // Function to scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Smooth scrolling animation
    });
  };

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
              src="/bill-summary-deploy/images/ai.png"
              alt="Google T5 Small"
              className="tech-icon"
            />
            <h4>Google T5-Small Model</h4>
            <p>AI for Summarization</p>
          </div>
          <div className="tech-card">
            <img src="/bill-summary-deploy/images/react.png" alt="React" className="tech-icon" />
            <h4>React</h4>
            <p>Frontend Development</p>
          </div>
          <div className="tech-card">
            <img src="/bill-summary-deploy/images/flask.jpg" alt="Flask" className="tech-icon" />
            <h4>Flask</h4>
            <p>Backend Development</p>
          </div>
          <div className="tech-card">
            <img src="/bill-summary-deploy/images/api.png" alt="REST API" className="tech-icon" />
            <h4>REST API</h4>
            <p>Web-based API</p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="meet-the-team">
        <h1>Meet the Team</h1>
        <div className="team-columns">
          {/* Team sections */}
          <div className="team-section">
            <h3>AI Team</h3>
            <div className="team-row mentor">
              <div className="team-member large">
                <img
                  src="/bill-summary-deploy/images/taylor.jpg"
                  alt="Taylor"
                  className="team-photo"
                />
                <h4>Taylor</h4>
                <p>Team Mentor - AI Model</p>
              </div>
            </div>
            {/* Second row - Two members */}
            <div className="team-row">
              <div className="team-member">
                <img
                  src="/bill-summary-deploy/images/member1.jpg"
                  alt="Member 1"
                  className="team-photo"
                />
                <h4>Member 1</h4>
              </div>
              <div className="team-member">
                <img
                  src="/bill-summary-deploy/images/member2.avif"
                  alt="Member 2"
                  className="team-photo"
                />
                <h4>Member 2</h4>
              </div>
            </div>
            {/* Third row - Three members */}
            <div className="team-row">
              <div className="team-member">
                <img
                  src="/bill-summary-deploy/images/member3.jpg"
                  alt="Member 3"
                  className="team-photo"
                />
                <h4>Member 3</h4>
              </div>
              <div className="team-member">
                <img
                  src="/bill-summary-deploy/images/member4.jpg"
                  alt="Member 4"
                  className="team-photo"
                />
                <h4>Member 4</h4>
              </div>
              <div className="team-member">
                <img
                  src="/bill-summary-deploy/images/member5.jpg"
                  alt="Member 5"
                  className="team-photo"
                />
                <h4>Member 5</h4>
              </div>
            </div>
          </div>

          {/* REST API Team */}
          <div className="team-section">
            <h3>REST API Team</h3>
            {/* First row - Mentor */}
            <div className="team-row mentor">
              <div className="team-member large">
                <img
                  src="/bill-summary-deploy/images/scott.jpg"
                  alt="Scott"
                  className="team-photo"
                />
                <h4>Scott</h4>
                <p>Team Mentor - REST API</p>
              </div>
            </div>
            {/* Second row - Two members */}
            <div className="team-row">
              <div className="team-member">
                <img
                  src="/bill-summary-deploy/images/member8.jpg"
                  alt="Member 8"
                  className="team-photo"
                />
                <h4>Member 8</h4>
              </div>
              <div className="team-member">
                <img
                  src="/bill-summary-deploy/images/member9.jpg"
                  alt="Member 9"
                  className="team-photo"
                />
                <h4>Member 9</h4>
              </div>
            </div>
            {/* Third row - Three members */}
            <div className="team-row">
              <div className="team-member">
                <img
                  src="/bill-summary-deploy/images/member10.jpg"
                  alt="Member 10"
                  className="team-photo"
                />
                <h4>Member 10</h4>
              </div>
              <div className="team-member">
                <img
                  src="/bill-summary-deploy/images/member11.jpg"
                  alt="Member 11"
                  className="team-photo"
                />
                <h4>Member 11</h4>
              </div>
              <div className="team-member">
                <img
                  src="/bill-summary-deploy/images/member12.jpg"
                  alt="Member 12"
                  className="team-photo"
                />
                <h4>Member 12</h4>
              </div>
            </div>
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
