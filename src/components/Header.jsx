import React from "react";
import Button from "/src/components/Button";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <h1>Antoine Masia</h1>
      <nav>
        <Button text="Connexion" color="dark" />
      </nav>
    </header>
  );
};

export default Header;
