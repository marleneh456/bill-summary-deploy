import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left: Google Logo and Text */}
        <div className="footer-left">
          <div className="google-logo">
            <img src="./images/google-icon.png" alt="Google Icon" />
            <span>powered by Google technology</span>
          </div>
        </div>

        {/* Center: Company Logo, Copyright, and Social Media */}
        <div className="footer-center">
          <img src="./images/logo.png" alt="Company Logo" className="company-logo" />
          <p>© 2024 Bill Summary. All Rights Reserved.</p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src="./images/facebook icon.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src="./images/twitterx icon.png" alt="Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img src="./images/linkedin icon.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/cheaptrix2/MTSUFall2024SoftwareEngineering" target="_blank" rel="noreferrer">
              <img src="./images/github icon.png" alt="GitHub" />
            </a>
          </div>
        </div>

        {/* Right: Disclaimer Text */}
        <div className="footer-right">
          <p className="footer-disclaimer">
            Disclaimer: Worried about your data and privacy? No need. We pledge
            that no information you send us is retained in any way. Any data you
            submit to us to be summarized is deleted when you close your web
            browser. So, be sure to do that.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
