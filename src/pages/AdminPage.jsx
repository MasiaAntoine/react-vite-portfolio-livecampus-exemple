import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";

const AdminPage = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <div>
      <h1>Admin Page</h1>
      <Button text="Déconnexion" color="dark" onClick={logout} />
      {/* Add your admin functionalities here */}
    </div>
  );
};

export default AdminPage;
