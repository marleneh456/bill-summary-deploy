// App.jsx

// Import necessary dependencies and components
import React, { useState } from "react"; // Import React and the useState hook for managing state
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components for client-side routing
import Navbar from "./components/Navbar"; // Import the Navbar component
import Footer from "./components/Footer"; // Import the Footer component
import ContactPage from "./components/ContactPage"; // Import the ContactPage component
import AboutPage from "./components/AboutPage"; // Import the AboutPage component
import UploadBoxPopup from "./components/UploadBoxPopup"; // Import the UploadBoxPopup component
import LoadingPopup from "./components/LoadingPopup"; // Import the LoadingPopup component
import SummaryPopup from "./components/SummaryPopup"; // Import the SummaryPopup component
import XMLParser from "./components/XMLParser"; // Import the XMLParser utility/function
import TeamPage from "./components/TeamPage"; // Import the TeamPage component
import ImagePopup from "./components/ImagePopup"; // Import the ImagePopup component
import TextPopup from "./components/TextPopup"; // Import the TextPopup component

// Define the main App component
function App() {
  // Define state variables using the useState hook
  const [step, setStep] = useState(1); // Tracks the current step in the upload process
  const [isLoading, setIsLoading] = useState(false); // Indicates if the app is currently loading
  const [parsedText, setParsedText] = useState(""); // Stores the parsed text from the uploaded XML
  const [isUploadPopupOpen, setIsUploadPopupOpen] = useState(false); // Controls the visibility of the upload popup
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false); // Controls the visibility of the image popup
  const [isTextPopupOpen, setIsTextPopupOpen] = useState(false); // Controls the visibility of the text popup
  const [popupImage, setPopupImage] = useState(""); // Stores the source of the image to display in the image popup
  const [popupText, setPopupText] = useState(""); // Stores the text content to display in the text popup

  // Function to toggle the upload popup visibility
  const toggleUploadPopup = () => {
    setIsUploadPopupOpen(!isUploadPopupOpen); // Toggle the upload popup state
    setStep(2); // Set the current step to 2
  };

  // Function to close the upload popup
  const closeUploadPopup = () => {
    setIsUploadPopupOpen(false); // Hide the upload popup
    setStep(1); // Reset the current step to 1
  };

  // Function to open the image popup with a specific image source
  const openImagePopup = (imageSrc) => {
    setPopupImage(imageSrc); // Set the image source for the popup
    setIsImagePopupOpen(true); // Show the image popup
  };

  // Function to close the image popup
  const closeImagePopup = () => {
    setIsImagePopupOpen(false); // Hide the image popup
    setPopupImage(""); // Clear the image source
  };

  // Function to open the text popup with specific text content
  const openTextPopup = (textContent) => {
    setPopupText(textContent); // Set the text content for the popup
    setIsTextPopupOpen(true); // Show the text popup
  };

  // Function to close the text popup
  const closeTextPopup = () => {
    setIsTextPopupOpen(false); // Hide the text popup
    setPopupText(""); // Clear the text content
  };

  // Function to handle the generation of the summary from the uploaded XML file
  const handleGenerateSummary = (xmlFile) => {
    setIsLoading(true); // Set loading state to true
    setTimeout(() => { // Simulate a delay (e.g., for processing)
      XMLParser(xmlFile, setParsedText, setIsLoading, setStep); // Call the XMLParser function with necessary callbacks
    }, 3000); // Delay of 3 seconds
  };

  // Function to reset the parsed text and set the step to 2 for starting over
  const handleStartOver = () => {
    setParsedText(""); // Clear the parsed text
    setStep(2); // Set the current step to 2
  };

  // Render the component
  return (
    <Router> {/* Wrap the application in a Router to enable routing */}
      <Navbar /> {/* Render the Navbar component */}
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}> {/* Main content area with flexbox styling */}
        <Routes> {/* Define the routes for the application */}
          <Route
            path="/" // Define the root path
            element={ // Define the component to render for the root path
              <div> {/* Container div */}
                <div className="welcome-section"> {/* Welcome section */}
                  <h1>Meet the AI that explains what the government is actually doing</h1> {/* Main heading */}
                  <p>
                    Our AI directly summarizes official US government bills to inform you, instead of confusing you.
                  </p> {/* Subheading/description */}
                </div>

                <div className="content-container"> {/* Content container */}
                  <div className="mission-section"> {/* Mission section */}
                    <div className="mission-block"> {/* Mission block */}
                      <h3>Mission Statement:</h3> {/* Mission statement heading */}
                      <p>
                        Whatsinthebill.ai aims to provide accurate, non-partisan summaries of United States legislation; 
                        it is a service designed so that any voter or legislator can quickly view pertinent information 
                        from within a given bill, act, or amendment. Our team is made up of recently graduated college 
                        students and a Marine Corps combat veteran of two foreign wars; 
                        we all have been directly impacted by multiple federal legislations, 
                        both positively and negatively, so this service is more than just a service. 
                        It aims to bring important information to any voter that can access this site, that would ordinarily be difficult to obtain. ...
                      </p> {/* Mission statement paragraph */}
                      <a
                        onClick={() =>
                          openTextPopup(
                            "Whatsinthebill.ai aims to provide accurate, non-partisan summaries of United States legislation; it is a service designed so that any voter or legislator can quickly view pertinent information from within a given bill, act, or amendment. Our team is made up of recently graduated college students and a Marine Corps combat veteran of two foreign wars; we all have been directly impacted by multiple federal legislations, both positively and negatively, so this service is more than just a service. It aims to bring important information to any voter that can access this site, that would ordinarily be difficult to obtain. While we do have ads to support our maintenance, the service is and will continue to be free of charge for all users: this is a passion of ours. Future expansion will support state legislation, and potentially other countries as well. Thank you for visiting whatsinthebill.ai. We hope this helps."
                          )
                        }
                        className="text-link"
                      >
                        LEARN MORE {/* Link to learn more about the mission */}
                      </a>
                    </div>
                  </div>

                  <div className="recent-bills-section"> {/* Recent bills section */}
                    <h3>Recent Bills</h3> {/* Heading for recent bills */}
                    <div className="recent-bills"> {/* Container for recent bills */}
                      <div className="bill-item"> {/* Individual bill item */}
                        <h4>Education Reform</h4> {/* Bill title */}
                        <p>
                          Aims to improve public school funding and introduce new curriculum standards to enhance
                          student learning.
                        </p> {/* Bill description */}
                        <a onClick={() => openTextPopup("Full Education Reform Bill...")} className="text-link">
                          View Full Bill {/* Link to view the full bill */}
                        </a>
                      </div>
                      <div className="bill-item"> {/* Another bill item */}
                        <h4>Cybersecurity Act</h4> {/* Bill title */}
                        <p>
                          Enhances national security through improved cyber defenses, partnership with tech companies,
                          and public awareness campaigns...
                        </p> {/* Bill description */}
                        <a onClick={() => openTextPopup("Full Cybersecurity Act Bill...")} className="text-link">
                          View Full Bill {/* Link to view the full bill */}
                        </a>
                      </div>
                      <div className="bill-item"> {/* Another bill item */}
                        <h4>Education Reform</h4> {/* Bill title */}
                        <p>
                          Aims to improve public school funding and introduce new curriculum standards to enhance
                          student learning.
                        </p> {/* Bill description */}
                        <a onClick={() => openTextPopup("Full Education Reform Bill...")} className="text-link">
                          View Full Bill {/* Link to view the full bill */}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="model-section"> {/* Model information section */}
                    <h4>About Model</h4> {/* Heading for model section */}
                    <p>Our model is specifically designed to summarize federal legislation...</p> {/* Description of the model */}
                    <a
                      onClick={() =>
                        openTextPopup(
                          "Our model is specifically designed to summarize federal legislation. This includes, but is not limited to bills, acts, and amendments. Submitting other types of documents, including unsupported formats, may lead to unexpected or inaccurate results."
                        )
                      }
                      className="text-link"
                    >
                      LEARN MORE {/* Link to learn more about the model */}
                    </a>
                  </div>

                  <div className="instructions-section"> {/* Instructions section */}
                    <h3>How to Use This Model:</h3> {/* Heading for instructions */}

                    <div className="instruction-item"> {/* Instruction step 1 */}
                      <div className="instruction-item-one">
                        <p>
                          1. Visit <a href="https://www.congress.gov/" target="_blank" rel="noopener noreferrer" className="website-link">Congress.gov</a>
                        </p> {/* Step 1 instruction with link */}
                      </div>
                    </div>

                    <div className="instruction-item"> {/* Instruction steps 2-4 */}
                      <div className="instruction-item-two-to-four"> {/* Container for steps 2-4 */}
                        <div className="instruction-item"> {/* Instruction step 2 */}
                          <p>
                            2. If you already know the name of your desired legislature, enter it into the search bar, e.g.,
                            <span className="highlight-quote"> “H.R.1234”</span> or <span className="highlight-quote">“S.5678”</span>.
                            If you would instead like to browse, click the <span className="highlight-quote">“Legislation”</span> navigation button in the top right corner of the site.
                          </p> {/* Step 2 instruction */}
                          <a onClick={() => openImagePopup("./bill-summary-deploy/images/Legislation.png")} className="image-link">
                            View Legislation Instruction {/* Link to view legislation instruction image */}
                          </a>
                        </div>

                        <div className="instruction-item"> {/* Instruction step 3 */}
                          <p>
                            3. Once you have selected your desired legislation, click the <span className="highlight-quote">“Text”</span> tab
                          </p> {/* Step 3 instruction */}
                          <a onClick={() => openImagePopup("./bill-summary-deploy/images/text instruction.png")} className="image-link">
                            View Text Instruction {/* Link to view text instruction image */}
                          </a>
                        </div>

                        <div className="instruction-item"> {/* Instruction step 4 */}
                          <p>
                            4. If not already selected, click on the XML option, right-click on the document, and select
                            <span className="highlight-quote"> “Save As”</span>
                          </p> {/* Step 4 instruction */}
                          <a onClick={() => openImagePopup("./bill-summary-deploy/images/Xml instruction.png")} className="image-link">
                            View XML Instruction {/* Link to view XML instruction image */}
                          </a>
                          <a onClick={() => openImagePopup("./bill-summary-deploy/images/Save as instruction.png")} className="image-link">
                            View Save as Instruction {/* Link to view 'Save As' instruction image */}
                          </a>
                        </div>
                      </div>
                    </div>

                    <hr className="instruction-separator" /> {/* Separator line */}

                    <div className="instruction-item"> {/* Instruction step 5 */}
                      <div className="instruction-item-five">
                        <p>
                          5. Once the document has been saved, upload your document by clicking the <span className="highlight-quote">“Try it Yourself”</span> button below and following the instructions.
                        </p> {/* Step 5 instruction */}
                        <button className="try-it-btn" onClick={toggleUploadPopup}>
                          Try It Yourself! {/* Button to open the upload popup */}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conditional rendering of popups based on state */}
                {isImagePopupOpen && (
                  <ImagePopup
                    isOpen={isImagePopupOpen} // Pass the open state to ImagePopup
                    imageSrc={popupImage} // Pass the image source to ImagePopup
                    onClose={closeImagePopup} // Pass the close function to ImagePopup
                  />
                )}
                {isTextPopupOpen && (
                  <TextPopup
                    isOpen={isTextPopupOpen} // Pass the open state to TextPopup
                    textContent={popupText} // Pass the text content to TextPopup
                    onClose={closeTextPopup} // Pass the close function to TextPopup
                  />
                )}
                {isUploadPopupOpen && (
                  <> {/* Fragment to group multiple elements */}
                    {step === 2 && !isLoading && (
                      <UploadBoxPopup
                        onGenerateSummary={handleGenerateSummary} // Pass the summary generation handler
                        closePopup={closeUploadPopup} // Pass the close function
                      />
                    )}
                    {isLoading && <LoadingPopup />} {/* Render LoadingPopup if loading */}
                    {step === 4 && (
                      <SummaryPopup
                        parsedText={parsedText} // Pass the parsed text to SummaryPopup
                        closePopup={closeUploadPopup} // Pass the close function
                        handleStartOver={handleStartOver} // Pass the start over handler
                      />
                    )}
                  </>
                )}
              </div>
            }
          />
          <Route path="/contact" element={<ContactPage />} /> {/* Route for ContactPage */}
          <Route path="/about" element={<AboutPage />} /> {/* Route for AboutPage */}
          <Route path="/team" element={<TeamPage />} /> {/* Route for TeamPage */}
        </Routes>
      </main>
      <Footer /> {/* Render the Footer component */}
    </Router>
  );
}

// Export the App component as the default export
export default App;