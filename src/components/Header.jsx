import React from "react";
import Button from "./Button";

const Header = ({ token, onOpenLoginModal, onLogout }) => {
  const handleOpenLoginModal = () => {
    onOpenLoginModal();
  };

  const handleLogoutClick = () => {
    onLogout();
  };

  return (
    <header className="flex justify-between items-center">
      <h1>Antoine Masia</h1>
      <nav className="flex gap-2">
        {token ? (
          <>
            <Button text="Modifier les projets" color="dark" />
            <Button
              text="Déconnexion"
              color="danger"
              onClick={handleLogoutClick}
            />
          </>
        ) : (
          <Button
            text="Connexion"
            color="dark"
            onClick={handleOpenLoginModal}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
