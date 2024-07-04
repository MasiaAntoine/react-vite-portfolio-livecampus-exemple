import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute";

const AppRouter = ({
  handleLogin,
  handleLogout,
  isDarkMode,
  onDarkModeToggle,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            isDarkMode={isDarkMode}
            onDarkModeToggle={onDarkModeToggle}
          />
        }
      />
      <Route
        path="/login"
        element={<LoginPage onLogin={handleLogin} isDarkMode={isDarkMode} />}
      />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <AdminPage onLogout={handleLogout} isDarkMode={isDarkMode} />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
