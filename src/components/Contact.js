// src/components/Contact.js

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending an email or saving data).
  };

  return (
    <section style={sectionStyle} id="contact">
      <h2 style={headerStyle}>Contact Me</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroupStyle}>
          <label style={labelStyle} htmlFor="name">
            Name
          </label>
          <input
            style={inputStyle}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle} htmlFor="email">
            Email
          </label>
          <input
            style={inputStyle}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle} htmlFor="message">
            Message
          </label>
          <textarea
            style={textareaStyle}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button style={buttonStyle} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

const sectionStyle = {
  backgroundColor: "#f7f7f7",
  padding: "20px",
};

const headerStyle = {
  fontSize: "2rem",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "400px",
  margin: "0 auto",
};

const inputGroupStyle = {
  marginBottom: "10px",
};

const labelStyle = {
  fontSize: "1rem",
};

const inputStyle = {
  padding: "5px",
  fontSize: "1rem",
};

const textareaStyle = {
  padding: "5px",
  fontSize: "1rem",
  minHeight: "150px",
};

const buttonStyle = {
  backgroundColor: "#3498db",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  cursor: "pointer",
};

export default Contact;
