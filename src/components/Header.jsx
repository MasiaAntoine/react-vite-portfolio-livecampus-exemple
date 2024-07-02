import React from "react";
import Button from "/src/components/Button";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <h1>Antoine Masia</h1>
      <nav>
        <Button text="Déconnexion" color="danger" />
      </nav>
    </header>
  );
};

export default Header;
