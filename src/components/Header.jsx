import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = ({ token, onLogout }) => {
  return (
    <header className="flex justify-between items-center">
      <h1>Antoine Masia</h1>
      <nav className="flex gap-2">
        {token ? (
          <>
            <Link to="/admin">
              <Button text="Admin" color="dark" />
            </Link>
          </>
        ) : (
          <Link to="/login">
            <Button text="Connexion" color="dark" />
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
