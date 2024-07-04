import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = ({ token, isDarkMode, onDarkModeToggle }) => {
  return (
    <header
      className={`flex justify-between items-center ${
        isDarkMode ? "bg-yellow-ultradark" : "bg-yellow-dark"
      }`}
    >
      <div className="flex gap-4 items-center">
        <DarkModeToggle
          onChange={onDarkModeToggle}
          checked={isDarkMode}
          size={80}
        />
        <h1 className="text-xl font-bold">Antoine Masia</h1>
      </div>

      <nav className="flex gap-2 items-center">
        {token ? (
          <>
            <Link to="/admin">
              <Button text="Admin" color={isDarkMode ? "yellow" : "dark"} />
            </Link>
          </>
        ) : (
          <Link to="/login">
            <Button text="Connexion" color={isDarkMode ? "yellow" : "dark"} />
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
