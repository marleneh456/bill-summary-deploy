/* 
  The Footer component includes two main sections: 
  1. A logo and copyright notice for the "Bill Summary" project.
  2. A list of social media icons (Facebook, Twitter, LinkedIn, GitHub) that link to the corresponding platforms.
  Each link opens in a new tab without affecting the current page (using target="_blank").
*/
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Footer Logo and Copyright Section */}
        <div className="footer-logo">
          {/* Company logo and copyright text */}
          <img src="./images/logo.png" alt="Company Logo" />
          <p>© 2024 Bill Summary. All Rights Reserved.</p>
        </div>

        {/* Social Media Links Section */}
        <div className="footer-social">
          {/* Facebook Link */}
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* Twitter Link */}
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>

          {/* LinkedIn Link */}
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>

          {/* GitHub Repository Link */}
          <a
            href="https://github.com/cheaptrix2/MTSUFall2024SoftwareEngineering"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
