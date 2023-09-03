import React, { useState } from "react";
import Layout from "../components/Layout";
import emailjs from "emailjs-com"; // Import the emailjs-com library

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using Email.js
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your Email.js service ID
        "YOUR_TEMPLATE_ID", // Replace with your Email.js template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: "band.fest@yahoo.com", // Replace with your target email address
          subject: formData.subject,
          message: formData.message,
        },
        "YOUR_USER_ID" // Replace with your Email.js user ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          // Reset form fields
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Email sending failed:", error);
        }
      );
  };

  return (
    <Layout>
      <section className="contact-section">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Have a question or want to get in touch? Fill out the form below, and we'll get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div className="form-group row">
                {/* ... Other form fields ... */}
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </fieldset>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
