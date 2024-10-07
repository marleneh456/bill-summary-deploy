// This file sets up the main structure of the app, including routing for different pages.
// It uses React Router to navigate between the home page, contact page, and about page.
// The app also includes a Navbar at the top, a footer at the bottom, and the main content in the middle.

import React, { useState, useEffect } from "react";
// Importing Router to handle page navigation, Routes to define possible pages,
// and Route to specify which component shows up for each URL path.
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar"; // Navbar appears on all pages.
import UploadBox from "./components/UploadBox"; // The home page component where users can upload files.
import Footer from "./components/Footer"; // The footer displayed on every page.
import ContactPage from "./components/ContactPage"; // Contact page component.
import AboutPage from "./components/AboutPage"; // About page component, gives details about the app or team.
import LoadingSpinner from "./components/LoadingSpinner"; // Import the loading spinner component

// This component adds loading functionality for any page
function PageWithLoading({ Component }) {
  const [isLoading, setIsLoading] = useState(false); // Manage loading state
  const location = useLocation(); // Track the current route (URL path)

  // Trigger loading effect when the route (location) changes
  useEffect(() => {
    setIsLoading(true); // Start loading when location changes
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 1.5 seconds
    }, 1500); // Simulate the loading duration

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [location]);

  // If loading, show the spinner, otherwise render the passed component
  return isLoading ? <LoadingSpinner /> : <Component />;
}

function App() {
  return (
    <Router>
      <Navbar /> {/* Display the navbar across all pages */}
      <main
        style={{
          display: "flex", // Flexbox for page layout
          flexDirection: "column", // Aligns content vertically
          alignItems: "center", // Centers content horizontally
        }}
      >
        <Routes>
		  {" "}
          {/* Routes define what content is shown on each page */}
          <Route path="/" element={<PageWithLoading Component={UploadBox} />} />
          {/* Loading Spinner - Home page - UploadBox */}
          <Route path="/contact" element={<PageWithLoading Component={ContactPage} />} />
          {/* loading Spinner - Contact page */}
          <Route path="/about" element={<PageWithLoading Component={AboutPage} />} /> 
		  {/* Loading Spinner - About page */}
        </Routes>
      </main>
      <Footer /> {/* Display the footer across all pages */}
    </Router>
  );
}

export default App; // Exporting the main App component
