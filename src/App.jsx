//App.jsx

// Import necessary dependencies and components
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import UploadBoxPopup from "./components/UploadBoxPopup";
import LoadingPopup from "./components/LoadingPopup";
import SummaryPopup from "./components/SummaryPopup";
import XMLParser from "./components/XMLParser";
import TeamPage from "./components/TeamPage";
import ImagePopup from "./components/ImagePopup";
import TextPopup from "./components/TextPopup";

function App() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [parsedText, setParsedText] = useState("");
  const [isUploadPopupOpen, setIsUploadPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isTextPopupOpen, setIsTextPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState("");
  const [popupText, setPopupText] = useState("");

  const toggleUploadPopup = () => {
    setIsUploadPopupOpen(!isUploadPopupOpen);
    setStep(2);
  };

  const closeUploadPopup = () => {
    setIsUploadPopupOpen(false);
    setStep(1);
  };

  const openImagePopup = (imageSrc) => {
    setPopupImage(imageSrc);
    setIsImagePopupOpen(true);
  };

  const closeImagePopup = () => {
    setIsImagePopupOpen(false);
    setPopupImage("");
  };

  const openTextPopup = (textContent) => {
    setPopupText(textContent);
    setIsTextPopupOpen(true);
  };

  const closeTextPopup = () => {
    setIsTextPopupOpen(false);
    setPopupText("");
  };

  const handleGenerateSummary = (xmlFile) => {
    setIsLoading(true);
    setTimeout(() => {
      XMLParser(xmlFile, setParsedText, setIsLoading, setStep);
    }, 3000);
  };

  const handleStartOver = () => {
    setParsedText("");
    setStep(2);
  };

  return (
    <Router>
      <Navbar />
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="welcome-section">
                  <h1>Meet the AI that explains what the government is actually doing</h1>
                  <p>
                    Our AI directly summarizes official US government bills to inform you, instead of confusing you.
                  </p>
                </div>

                <div className="content-container">
                  <div className="mission-section">
                    <div className="mission-block">
                      <h3>Mission Statement:</h3>
                      <p>
                        Whatsinthebill.ai aims to provide accurate, non-partisan summaries of United States legislation; 
                        it is a service designed so that any voter or legislator can quickly view pertinent information 
                        from within a given bill, act, or amendment. Our team is made up of recently graduated college 
                        students and a Marine Corps combat veteran of two foreign wars; 
                        we all have been directly impacted by multiple federal legislations, 
                        both positively and negatively, so this service is more than just a service. 
                        It aims to bring important information to any voter that can access this site, that would ordinarily be difficult to obtain. ...
                      </p>
                      <a
                        onClick={() =>
                          openTextPopup(
                            "Whatsinthebill.ai aims to provide accurate, non-partisan summaries of United States legislation; it is a service designed so that any voter or legislator can quickly view pertinent information from within a given bill, act, or amendment. Our team is made up of recently graduated college students and a Marine Corps combat veteran of two foreign wars; we all have been directly impacted by multiple federal legislations, both positively and negatively, so this service is more than just a service. It aims to bring important information to any voter that can access this site, that would ordinarily be difficult to obtain. While we do have ads to support our maintenance, the service is and will continue to be free of charge for all users: this is a passion of ours. Future expansion will support state legislation, and potentially other countries as well. Thank you for visiting whatsinthebill.ai. We hope this helps."
                          )
                        }
                        className="text-link"
                      >
                        LEARN MORE
                      </a>
                    </div>
                  </div>

                  <div className="recent-bills-section">
                    <h3>Recent Bills</h3>
                    <div className="recent-bills">
                      <div className="bill-item">
                        <h4>Education Reform</h4>
                        <p>
                          Aims to improve public school funding and introduce new curriculum standards to enhance
                          student learning.
                        </p>
                        <a onClick={() => openTextPopup("Full Education Reform Bill...")} className="text-link">
                          View Full Bill
                        </a>
                      </div>
                      <div className="bill-item">
                        <h4>Cybersecurity Act</h4>
                        <p>
                          Enhances national security through improved cyber defenses, partnership with tech companies,
                          and public awareness campaigns...
                        </p>
                        <a onClick={() => openTextPopup("Full Cybersecurity Act Bill...")} className="text-link">
                          View Full Bill
                        </a>
                      </div>
                      <div className="bill-item">
                        <h4>Education Reform</h4>
                        <p>
                          Aims to improve public school funding and introduce new curriculum standards to enhance
                          student learning.
                        </p>
                        <a onClick={() => openTextPopup("Full Education Reform Bill...")} className="text-link">
                          View Full Bill
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="model-section">
                    <h4>About Model</h4>
                    <p>Our model is specifically designed to summarize federal legislation...</p>
                    <a
                      onClick={() =>
                        openTextPopup(
                          "Our model is specifically designed to summarize federal legislation. This includes, but is not limited to bills, acts, and amendments. Submitting other types of documents, including unsupported formats, may lead to unexpected or inaccurate results."
                        )
                      }
                      className="text-link"
                    >
                      LEARN MORE
                    </a>
                  </div>

                  <div className="instructions-section">
                    <h3>How to Use This Model:</h3>

                    <div className="instruction-item">
                      <div className="instruction-item-one">
                        <p>
                          1. Visit <a href="https://www.congress.gov/" target="_blank" className="website-link">Congress.gov</a>
                        </p>
                      </div>
                    </div>

                    <div className="instruction-item">
                      <div className="instruction-item-two-to-four">
                        <div className="instruction-item">
                          <p>
                            2. If you already know the name of your desired legislature, enter it into the search bar, e.g.,
                            <span className="highlight-quote"> “H.R.1234”</span> or <span className="highlight-quote">“S.5678”</span>.
                            If you would instead like to browse, click the <span className="highlight-quote">“Legislation”</span> navigation button in the top right corner of the site.
                          </p>
                          <a onClick={() => openImagePopup("./bill-summary-deploy/images/Legislation.png")} className="image-link">
                            View Legislation Instruction
                          </a>
                        </div>

                        <div className="instruction-item">
                          <p>
                            3. Once you have selected your desired legislation, click the <span className="highlight-quote">“Text”</span> tab
                          </p>
                          <a onClick={() => openImagePopup("./bill-summary-deploy/images/text instruction.png")} className="image-link">
                            View Text Instruction
                          </a>
                        </div>

                        <div className="instruction-item">
                          <p>
                            4. If not already selected, click on the XML option, right-click on the document, and select
                            <span className="highlight-quote"> “Save As”</span>
                          </p>
                          <a onClick={() => openImagePopup("./bill-summary-deploy/images/Xml instruction.png")} className="image-link">
                            View XML Instruction
                          </a>
                          <a onClick={() => openImagePopup("./bill-summary-deploy/images/Save as instruction.png")} className="image-link">
                            View Save as Instruction
                          </a>
                        </div>
                      </div>
                    </div>

                    <hr className="instruction-separator" />

                    <div className="instruction-item">
                      <div className="instruction-item-five">
                        <p>
                          5. Once the document has been saved, upload your document by clicking the <span className="highlight-quote">“Try it Yourself”</span> button below and following the instructions.
                        </p>
                        <button className="try-it-btn" onClick={toggleUploadPopup}>
                          Try It Yourself!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {isImagePopupOpen && (
                  <ImagePopup isOpen={isImagePopupOpen} imageSrc={popupImage} onClose={closeImagePopup} />
                )}
                {isTextPopupOpen && (
                  <TextPopup isOpen={isTextPopupOpen} textContent={popupText} onClose={closeTextPopup} />
                )}
                {isUploadPopupOpen && (
                  <>
                    {step === 2 && !isLoading && <UploadBoxPopup onGenerateSummary={handleGenerateSummary} closePopup={closeUploadPopup} />}
                    {isLoading && <LoadingPopup />}
                    {step === 4 && <SummaryPopup parsedText={parsedText} closePopup={closeUploadPopup} handleStartOver={handleStartOver} />}
                  </>
                )}
              </div>
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
