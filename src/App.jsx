import React from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./router";
import useAuth from "./hooks/useAuth";

const App = () => {
  const { token, login, logout } = useAuth();
  const navigate = useNavigate();

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

  return (
    <>
      <Header token={token} onLogout={handleLogout} />
      <AppRouter
        token={token}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <Footer />
    </>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
