import { useState } from "react";
import axios from "axios";
import { connexionUrl } from "/src/shared/endpoints";

const useAuth = () => {
  const [token, setToken] = useState("");

  const login = async (formData) => {
    try {
      const response = await axios.post(connexionUrl, formData);
      setToken(response.data.token);
    } catch (error) {
      throw new Error(
        error.response?.data?.message ||
          "Une erreur est survenue lors de la connexion."
      );
    }
  };

  const logout = () => {
    setToken("");
  };

  return {
    token,
    login,
    logout,
  };
};

export default useAuth;
