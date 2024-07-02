import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute";
import useAuth from "./hooks/useAuth";

const App = () => {
  const { token, login, logout } = useAuth();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      await login(formData);
      setLoginModalOpen(false);
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
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
