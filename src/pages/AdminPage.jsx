import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useAuth } from "../contexts/AuthContext";
import Projects from "../components/Projects";

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

  const redirectToPortfolio = () => {
    navigate("/");
  };

  const redirectToAddProject = () => {
    navigate("/add");
  };

  return (
    <>
      <section className={`${isDarkMode ? "bg-yellow" : "bg-yellow-light"}`}>
        <h1 className="mb-3">Admin Page</h1>

        <div className="flex gap-3 mb-6">
          <Button
            text="Portfolio"
            onClick={redirectToPortfolio}
            color={isDarkMode ? "dark" : "yellow"}
          />
          <Button
            text="Ajouter Projet"
            onClick={redirectToAddProject}
            color={isDarkMode ? "dark" : "yellow"}
          />
          <Button
            text="Déconnexion"
            color="danger"
            onClick={handleLogoutClick}
          />
        </div>
      </section>
      <Projects isDarkMode={isDarkMode} />
    </>
  );
};

export default AdminPage;
