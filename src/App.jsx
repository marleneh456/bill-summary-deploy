// This file sets up the main structure of the app, including routing for different pages.
// It uses React Router to navigate between the home page, contact page, and about page.
// The app also includes a Navbar at the top, a footer at the bottom, and the main content in the middle.

import React from "react";
// Importing Router to handle page navigation, Routes to define possible pages,
// and Route to specify which component shows up for each URL path.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"; // Navbar appears on all pages.
import UploadBox from "./components/UploadBox"; // The home page component where users can upload files.
import Footer from "./components/Footer"; // The footer displayed on every page.
import ContactPage from "./components/ContactPage"; // Contact page component.
import AboutPage from "./components/AboutPage"; // About page component, gives details about the app or team.

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
          <Route path="/" element={<UploadBox />} />{" "}
          {/* Home page - UploadBox */}
          <Route path="/contact" element={<ContactPage />} />{" "}
          {/* Contact page */}
          <Route path="/about" element={<AboutPage />} /> {/* About page */}
        </Routes>
      </main>
      <Footer /> {/* Display the footer across all pages */}
    </Router>
  );
}

export default App; // Exporting the main App component
