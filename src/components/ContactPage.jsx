/* 
  The ContactPage component provides a simple form for users to reach out to the team. 
  It includes fields for name, email, and a message. There is also a section displaying 
  contact information like the company's address, phone number, and email. 
  This page allows users to submit inquiries or messages directly through the form.
*/
import React from "react";

function ContactPage() {
  return (
    <div className="contact-page">
      {/* Page Title */}
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>

      <div className="contact-form-container">
        {/* Contact Form Section */}
        <form className="contact-form">
          {/* Input field for the user's name */}
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          {/* Input field for the user's email address */}
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          {/* Textarea for the user's message */}
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          {/* Upload Box */}
          <label htmlFor="file">Attachments</label>
          <p className="upload-instructions">
            Allowed file types: jpg, jpeg, png, xml, txt, pdf, doc, docx, and less than 25MB.
          </p>
          <input type="file" id="file" name="file" multiple />
          {/* Submit button to send the form */}
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Information Section */}
        <div className="contact-info">
          {/* Displaying the address */}
          <h3>Our Address</h3>
          <p>1234 Street Name, City, State, 56789</p>

          {/* Displaying the phone number */}
          <h3>Phone</h3>
          <p>(123) 456-7890</p>

          {/* Displaying the email address */}
          <h3>Email</h3>
          <p>admin@whatsinthebill.ai</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
