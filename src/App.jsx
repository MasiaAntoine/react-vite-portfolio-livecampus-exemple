import React, { useState } from "react";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Login from "./components/Login";
import useAuth from "./hooks/useAuth";

const App = () => {
  const { token, login, logout } = useAuth();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleLogin = async (formData) => {
    try {
      await login(formData);
      setLoginModalOpen(false);
    } catch (error) {
      alert(error.message);
    }
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
        onLogout={logout}
      />
      <Presentation />
      <Projects />
      <Footer />

      <Login
        isOpen={isLoginModalOpen}
        onClose={handleCloseLoginModal}
        onSubmit={handleLogin}
      />
    </>
  );
};

export default App;
