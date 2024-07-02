import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";

const AdminPage = ({ onLogout }) => {
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
    <section>
      <h1 className="mb-3">Admin Page</h1>
      <Button text="Déconnexion" color="dark" onClick={handleLogoutClick} />
    </section>
  );
};

export default AdminPage;
