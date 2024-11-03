import React, { useState, useEffect } from "react"; // Import React and hooks (useState, useEffect)
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu visibility
  const [isMobile, setIsMobile] = useState(false); // State to track whether the screen size is mobile

  // useEffect to handle screen resizing and toggle mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1500); // Set isMobile to true if the screen width is 1024px or less
    };

    window.addEventListener("resize", handleResize); // Add event listener for window resizing

    handleResize(); // Call handleResize immediately to set the initial state

    return () => window.removeEventListener("resize", handleResize); // Cleanup the event listener on unmount
  }, []); // Empty dependency array ensures this runs only on component mount/unmount

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Flip the isMenuOpen state (open if closed, close if open)
  };

  return (
    <header className="navbar">
      <div className="logo-container">
        {/* Logo image that redirects to home page when clicked */}
        <img
          src="./images/logo.png"
          alt="Company Logo"
          className="logo"
          onClick={() => (window.location.href = "/")} // Redirect to home page on logo click
        />
        <img
          src="./images/witb_titlecard_white.png"
          alt="Company Title Card"
          className="title-card"
        />
      </div>

      {/* Show Desktop Navigation on larger screens (when isMobile is false) */}
      {!isMobile && (
        <nav className="desktop-nav-links">
          <ul>
            {/* Each Link navigates to different pages */}
            <li>
              <Link to="/">Home</Link> {/* Link to home page */}
            </li>
            <li>
              <Link to="/about">About</Link> {/* Link to about page */}
            </li>
            <li>
              <Link to="/team">Meet The Team</Link>{" "}
              {/* Link to meet the team page */}
            </li>
            <li>
              <Link to="/contact">Contact</Link> {/* Link to contact page */}
            </li>
          </ul>
        </nav>
      )}

      {/* Show Mobile Menu Button and Links when isMobile is true */}
      {isMobile && (
        <>
          {/* Menu button that toggles between hamburger and close icon */}
          <button className="menu-button" onClick={toggleMenu}>
            {isMenuOpen ? <span>&times;</span> : <span>&#9776;</span>}{" "}
            {/* Show &times; if open, otherwise show &#9776; */}
          </button>

          {/* Mobile navigation that opens or closes based on isMenuOpen state */}
          <nav className={`nav-links ${isMenuOpen ? "open" : "close"}`}>
            <ul>
              <li>
                {/* Each link closes the menu after clicking */}
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/team" onClick={toggleMenu}>
                  Meet The Team
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}

export default Navbar; // Export the Navbar component for use in other parts of the app