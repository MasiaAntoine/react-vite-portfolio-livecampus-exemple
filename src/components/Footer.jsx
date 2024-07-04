import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <footer
      className={`relative ${
        isDarkMode ? "bg-yellow-ultradark" : "bg-yellow-dark"
      }`}
    >
      <h2 className="mb-4">Me Contacter</h2>
      <div className="flex justify-between items-center">
        <div>
          <p>Masia Antoine</p>
          <p>8 rue des pain,</p>
          <p>31400 Toulouse</p>
        </div>
        <div>
          <p>06 45 67 87 97</p>
          <p>contact@masia-antoine.fr</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
