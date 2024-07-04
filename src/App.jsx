import React, { useState } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./router";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

const App = () => {
  const { token, login, logout } = useAuth();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleLogin = async (formData) => {
    try {
      await login(formData);
      navigate("/admin");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Header
        token={token}
        onLogout={handleLogout}
        isDarkMode={isDarkMode}
        onDarkModeToggle={toggleDarkMode}
      />
      <AppRouter
        token={token}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        isDarkMode={isDarkMode}
        onDarkModeToggle={toggleDarkMode}
      />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  );
};

export default AppWrapper;
