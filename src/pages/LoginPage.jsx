import React, { useState } from "react";
import Button from "../components/Button";
import FormField from "../components/FormField";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const LoginPage = ({ isDarkMode }) => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate("/admin");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section
      className={`flex items-center justify-center h-[68vh] ${
        isDarkMode ? "bg-yellow" : "bg-yellow-light"
      }`}
    >
      <div
        className={` p-12 rounded-lg w-[30vw] shadow-lg ${
          isDarkMode ? "bg-yellow-dark" : "bg-yellow"
        }`}
      >
        <h2 className="mb-8 text-center">Connexion</h2>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <FormField
            label="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
          <FormField
            label="Mot de passe"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
          <div className="flex justify-end gap-3">
            <Button
              text="Annuler"
              color="danger"
              onClick={() => navigate("/")}
            />
            <Button
              text="Valider"
              color={isDarkMode ? "dark" : "yellow"}
              type="submit"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
