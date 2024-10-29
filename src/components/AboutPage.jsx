import React, { useState, useEffect } from "react"; // Import React, and the hooks useState and useEffect

function AboutPage() {
  const [showTopBtn, setShowTopBtn] = useState(false); // State to control the visibility of the "Go to Top" button

  // Hook to handle the scroll event and show the button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      // Function to check the scroll position
      if (window.pageYOffset > 300) {
        // If the scroll position is greater than 300px
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
                  src="./bill-summary-deploy/images/Taylor.jpg"
                  alt="Taylor"
                  className="team-photo"
                />
                <h4>
                  Taylor Hartman <br />
                  <br />
                  <a
                    href="https://github.com/cheaptrix2"
                    target="_blank"
                    className="github-link"
                  >
                    <i className="fab fa-github social-icon"></i>
                  </a>
                  <a
                    href="https://github.com/cheaptrix2"
                    target="_blank"
                    className="username-link"
                  >
                    @cheaptrix2
                  </a>
                </h4>
                <p>
                  Head Project Manager and Lead Artificial Intelligence Engineer
                </p>
                <p>
                  M.S. in Computer Science with concentration in Arificial
                  Intelligence, Machine Learning, Deep Learning, and Big Data -
                  MTSU
                </p>
                <p>B.S. Computer Science - MTSU</p>
              </div>
            </div>
            {/* Second row */}
            <div className="team-row">
              <div className="team-member">
                <img
                  src="./bill-summary-deploy/images/Wasim.png"
                  alt="Member 1"
                  className="team-photo"
                />
                <h4>
                  Wasim Mondal <br />
                  <br />
                  <a
                    href="https://github.com/wasimmondal"
                    target="_blank"
                    className="github-link"
                  >
                    <i className="fab fa-github social-icon"></i>
                  </a>
                  <a
                    href="https://github.com/wasimmondal"
                    target="_blank"
                    className="username-link"
                  >
                    @wasimmondal
                  </a>
                </h4>

                <p>Artificial Intelligence Team Leader</p>

                <p>B.S. Computer Science - MTSU</p>
              </div>

              <div className="team-member">
                <img
                  src="./bill-summary-deploy/images/Chris.jpg"
                  alt="Member 2"
                  className="team-photo"
                />

                <h4>
                  Chris Keiningham <br />
                  <br />
                  <a
                    href="https://github.com/chriskein1"
                    target="_blank"
                    className="github-link"
                  >
                    <i className="fab fa-github social-icon"></i>
                  </a>
                  <a
                    href="https://github.com/chriskein1"
                    target="_blank"
                    className="username-link"
                  >
                    @chriskein1
                  </a>
                </h4>

                <p>Artificial Intelligence Engineer</p>

                <p>B.S. Computer Science, Professional Concentration - MTSU</p>
                <p>Minor in Mathematics - MTSU</p>

              </div>
            </div>
            {/* Third row */}
            <div className="team-row">
              <div className="team-member">
                <img
                  src="./bill-summary-deploy/images/Tyler.jpg"
                  alt="Member 3"
                  className="team-photo"
                />
                <h4>
                  Tyler Stickel 
                  <br />
                  <br />
                  <a
                    href="https://github.com/Sarafae"
                    target="_blank"
                    className="github-link"
                  >
                    <i className="fab fa-github social-icon"></i>
                  </a>
                  <a
                    href="https://github.com/Sarafae"
                    target="_blank"
                    className="username-link"
                  >
                    @Sarafae
                  </a>
                </h4>
                <p>Artificial Intelligence Engineer</p>

                <p>B.S. Computer Science - MTSU</p>
              </div>
              <div className="team-member">
                <img
                  src="./bill-summary-deploy/images/Evan.jpg"
                  alt="Member 4"
                  className="team-photo"
                />
                <h4>
                  Evan Smith 
                  <br />
                  <br />
                  <a
                    href="https://github.com/EvanSmith1016"
                    target="_blank"
                    className="github-link"
                  >
                    <i className="fab fa-github social-icon"></i>
                  </a>
                  <a
                    href="https://github.com/EvanSmith1016"
                    target="_blank"
                    className="username-link"
                  >
                    @EvanSmith1016
                  </a>
                </h4>
                <p>Artificial Intelligence Engineer</p>

                <p>B.S. Computer Science, Professional Concentration - MTSU</p>
                <p>Minor in Mathematics - MTSU</p>
              </div>
            </div>

            {/* Fourth row */}
            <div className="team-row">
              <div className="team-member">
                <img
                  src="./bill-summary-deploy/images/Om.jpg"
                  alt="Member 5"
                  className="team-photo"
                />

                <h4>
                  Om Patel 
                  <br />
                  <br />
                  <a
                    href="https://github.com/Omp200g"
                    target="_blank"
                    className="github-link"
                  >
                    <i className="fab fa-github social-icon"></i>
                  </a>
                  <a
                    href="https://github.com/Omp200g"
                    target="_blank"
                    className="username-link"
                  >
                    @Omp200g
                  </a>
                </h4>

                <p>Artificial Intelligence Engineer</p>

                <p>B.S. Computer Science - MTSU</p>
              </div>

              <div className="team-member">
                <img
                  src="./bill-summary-deploy/images/Jacob.jpg"
                  alt="Member 6"
                  className="team-photo"
                />
                <h4>
                  Jacob Sherlin 
                  <br />
                  <br />
                  <a
                    href="https://github.com/jacobsherlin"
                    target="_blank"
                    className="github-link"
                  >
                    <i className="fab fa-github social-icon"></i>
                  </a>
                  <a
                    href="https://github.com/jacobsherlin"
                    target="_blank"
                    className="username-link"
                  >
                    @jacobsherlin
                  </a>
                </h4>
                <p>Artificial Intelligence Engineer</p>

                <p>B.S. Computer Science, Professional Concentration - MTSU</p>
                <p>Minor in Engineering Technology - MTSU</p>
              </div>
            </div>

            <div className="team-row">
              <div className="team-member">
                <img
                  src="./bill-summary-deploy/images/Nahid.png"
                  alt="Member 14"
                  className="team-photo"
                />
                <h4>
                  Nahid Hasan 
                  <br />
                  <br />
                  <a
                    href="https://github.com/mnhasan44"
                    target="_blank"
                    className="github-link"
                  >
                    <i className="fab fa-github social-icon"></i>
                  </a>
                  <a
                    href="https://github.com/mnhasan44"
                    target="_blank"
                    className="username-link"
                  >
                    @mnhasan44
                  </a>
                </h4>
                <p>Artificial Intelligence Engineer</p>

                <p>B.S. Computer Science - MTSU</p>
                <p>Minor in Computational and Data Science - MTSU</p>
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
                  src="./bill-summary-deploy/images/Scott.jpg"
                  alt="Scott"
                  className="team-photo"
                />
                <h4>
                  Scott Hartsell 
                  <br />
                  <br />
                  <a
                    href="https://github.com/jasonscotth"
                    target="_blank"
                    className="github-link"
                  >
                    <i className="fab fa-github social-icon"></i>
                  </a>
                  <a
                    href="https://github.com/jasonscotth"
                    target="_blank"
                    className="username-link"
                  >
                    @jasonscotth
                  </a>
                </h4>
                <p>Assistant Project Manager and Lead Backend Engineer</p>

                <p>B.S. Computer Science - MTSU</p>
              </div>
            </div>

            {/* Second row  */}
            <div className="team-row">
              <div className="team-member">
                <img
                  src="./bill-summary-deploy/images/Raymond.jpg"
                  alt="Member 9"
                  className="team-photo"
                />
                <h4>
                  Raymond Green 
                  <br />
                  <br />
                  <a
                    href="https://github.com/Reowulf"
                    target="_blank"
                    className="github-link"
                  >
                    <i className="fab fa-github social-icon"></i>
                  </a>
                  <a
                    href="https://github.com/Reowulf"
                    target="_blank"
                    className="username-link"
                  >
                    @Reowulf
                  </a>
                </h4>
                <p>REST API Team Leader</p>

                <p>B.S. Computer Science, Professional Concentration - MTSU</p>
              </div>

              <div className="team-member">
                <img
                  src="./bill-summary-deploy/images/Marlene.jpg"
                  alt="Member 8"
                  className="team-photo"
                />
                <h4>
                  Marlene Habib 
                  <br />
                  <br />
                  <a
                    href="https://github.com/marleneh456"
                    target="_blank"
                    className="github-link"
                  >
                    <i className="fab fa-github social-icon"></i>
                  </a>
                  <a
                    href="https://github.com/marleneh456"
                    target="_blank"
                    className="username-link"
                  >
                    @marleneh456
                  </a>
                </h4>
                <p>React Engineer</p>

                <p>B.S. Computer Science, Professional Concentration - MTSU</p>
                <p>Minor in Mathematics - MTSU</p>
              </div>
            </div>

            {/* Third row - */}
            <div className="team-row">
              <div className="team-member">
                <img
                  src="./bill-summary-deploy/images/Rogena.jpg"
                  alt="Member 10"
                  className="team-photo"
                />
                <h4>
                  Rogena Khella 
                  <br />
                  <br />
                  <a
                    href="https://github.com/rogenakhella3"
                    target="_blank"
                    className="github-link"
                  >
                    <i className="fab fa-github social-icon"></i>
                  </a>
                  <a
                    href="https://github.com/rogenakhella3"
                    target="_blank"
                    className="username-link"
                  >
                    @rogenakhella3
                  </a>
                </h4>
                <p>React Engineer</p>

                <p>B.S. Computer Science - MTSU</p>
              </div>
              <div className="team-member">
                <img
                  src="./bill-summary-deploy/images/Josh.jpg"
                  alt="Member 11"
                  className="team-photo"
                />
                <h4>
                  Joshua Kirkpatrick 
                  <br />
                  <br />
                  <a
                    href="https://github.com/jbk3h"
                    target="_blank"
                    className="github-link"
                  >
                    <i className="fab fa-github social-icon"></i>
                  </a>
                  <a
                    href="https://github.com/jbk3h"
                    target="_blank"
                    className="username-link"
                  >
                    @jbk3h
                  </a>
                </h4>
                <p>Backend Engineer</p>

                <p>B.S. Computer Science - MTSU</p>
              </div>
            </div>
            {/* Fourth row */}
            <div className="team-row">
              <div className="team-member">
                <img
                  src="./bill-summary-deploy/images/Van.jpg"
                  alt="Member 12"
                  className="team-photo"
                />
                <h4>
                  Van Lawn 
                  <br />
                  <br />
                  <a
                    href="https://github.com/JohnnyLawma"
                    target="_blank"
                    className="github-link"
                  >
                    <i className="fab fa-github social-icon"></i>
                  </a>
                  <a
                    href="https://github.com/JohnnyLawma"
                    target="_blank"
                    className="username-link"
                  >
                    @JohnnyLawma
                  </a>
                </h4>
                <p>Backend Engineer</p>

                <p>B.S. Computer Science - MTSU</p>
              </div>
              <div className="team-member">
                <img
                  src="./bill-summary-deploy/images/Drew.jpg"
                  alt="Member 13"
                  className="team-photo"
                />
                <h4>
                  Ivan Orta <br />
                  <br />
                  <a
                    href="https://github.com/idorta"
                    target="_blank"
                    className="github-link"
                  >
                    <i className="fab fa-github social-icon"></i>
                  </a>
                  <a
                    href="https://github.com/idorta"
                    target="_blank"
                    className="username-link"
                  >
                    @idorta
                  </a>
                </h4>
                <p>Backend Engineer</p>

                <p>B.S. Computer Science - MTSU</p>
              </div>
            </div>
            <div className="team-row">
              <div className="team-member">
                <img
                  src="./bill-summary-deploy/images/Herrick.jpg"
                  alt="Member 14"
                  className="team-photo"
                />
                <h4>
                  Herrick Vasck 
                  <br />
                  <br />
                  <a
                    href="https://github.com/HerrickVasck"
                    target="_blank"
                    className="github-link"
                  >
                    <i className="fab fa-github social-icon"></i>
                  </a>
                  <a
                    href="https://github.com/HerrickVasck"
                    target="_blank"
                    className="username-link"
                  >
                    @HerrickVasck
                  </a>
                </h4>
                <p>Backend Server Development</p>

                <p>B.S. Computer Science - MTSU</p>
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
