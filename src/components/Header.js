// src/components/Header.js

import React from "react";
import profileImage from "../images/profile.jpg"; // Import your profile image

const Header = () => {
  return (
    <header style={headerStyle}>
      <img
        src={profileImage} // Use the imported image
        alt="Profile"
        style={imageStyle}
      />
      <h1 style={titleStyle}>My Portfolio</h1>
    </header>
  );
};

const headerStyle = {
  backgroundColor: "#3498db",
  color: "#fff",
  padding: "20px",
  textAlign: "center",
};

const imageStyle = {
  width: "100px", // Set the width and height as needed
  height: "100px",
  borderRadius: "50%", // To make it round if your photo is square
};

const titleStyle = {
  fontSize: "2rem",
};

export default Header;
