import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useAuth } from "../contexts/AuthContext";

const AdminPage = ({ onLogout, isDarkMode }) => {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const handleLogoutClick = () => {
    onLogout();
  };

  return (
    <section className={`${isDarkMode ? "bg-yellow" : "bg-yellow-light"}`}>
      <h1 className="mb-3">Admin Page</h1>

      <div className="flex gap-3">
        <Button
          text="Modifier les projets"
          color={isDarkMode ? "dark" : "yellow"}
        />
        <Button text="Déconnexion" color="danger" onClick={handleLogoutClick} />
      </div>
    </section>
  );
};

export default AdminPage;
