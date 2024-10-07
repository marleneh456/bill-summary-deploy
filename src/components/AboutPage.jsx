import React from "react";

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
          <div className="tech-card">
            <img
              src="/images/ai.png"
              alt="Google T5 Small"
              className="tech-icon"
            />
            <h4>Google T5-Small Model</h4>
            <p>AI for Summarization</p>
          </div>
          <div className="tech-card">
            <img src="/images/react.png" alt="React" className="tech-icon" />
            <h4>React</h4>
            <p>Frontend Development</p>
          </div>
          <div className="tech-card">
            <img src="/images/flask.jpg" alt="Flask" className="tech-icon" />
            <h4>Flask</h4>
            <p>Backend Development</p>
          </div>
          <div className="tech-card">
            <img src="/images/api.png" alt="REST API" className="tech-icon" />
            <h4>REST API</h4>
            <p>Web-based API</p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="meet-the-team">
        <h1>Meet the Team</h1>
        <div className="team-columns">
          {/* AI Team */}
          <div className="team-section">
            <h3> AI Team</h3>
            {/* First row - Mentor */}
            <div className="team-row mentor">
              <div className="team-member large">
                <img
                  src="/images/taylor.jpg"
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
                  src="/images/member1.jpg"
                  alt="Member 1"
                  className="team-photo"
                />
                <h4>Member 1</h4>
              </div>
              <div className="team-member">
                <img
                  src="/images/member2.avif"
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
                  src="/images/member3.jpg"
                  alt="Member 3"
                  className="team-photo"
                />
                <h4>Member 3</h4>
              </div>
              <div className="team-member">
                <img
                  src="/images/member4.jpg"
                  alt="Member 4"
                  className="team-photo"
                />
                <h4>Member 4</h4>
              </div>
              <div className="team-member">
                <img
                  src="/images/member5.jpg"
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
                  src="/images/scott.jpg"
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
                  src="/images/member8.jpg"
                  alt="Member 8"
                  className="team-photo"
                />
                <h4>Member 8</h4>
              </div>
              <div className="team-member">
                <img
                  src="/images/member9.jpg"
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
                  src="/images/member10.jpg"
                  alt="Member 10"
                  className="team-photo"
                />
                <h4>Member 10</h4>
              </div>
              <div className="team-member">
                <img
                  src="/images/member11.jpg"
                  alt="Member 11"
                  className="team-photo"
                />
                <h4>Member 11</h4>
              </div>
              <div className="team-member">
                <img
                  src="/images/member12.jpg"
                  alt="Member 12"
                  className="team-photo"
                />
                <h4>Member 12</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
