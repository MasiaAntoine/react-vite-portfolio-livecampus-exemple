import React, { useState } from "react";
import { connexionUrl } from "/src/shared/endpoints";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

const App = () => {
  const [token, setToken] = useState("");
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleLogin = async (formData) => {
    try {
      const response = await fetch(connexionUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message);
      } else {
        const { token } = await response.json();
        setToken(token);
        setLoginModalOpen(false);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Une erreur est survenue lors de la connexion.");
    }
  };

  const handleLogout = () => {
    setToken("");
  };

  const handleOpenLoginModal = () => {
    setLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <>
      <Header
        token={token}
        onOpenLoginModal={handleOpenLoginModal}
        onLogout={handleLogout}
      />
      <Presentation />
      <Projects />
      <Footer />

      <Modal
        isOpen={isLoginModalOpen}
        onClose={handleCloseLoginModal}
        onSubmit={handleLogin}
      />
    </>
  );
};

export default App;
