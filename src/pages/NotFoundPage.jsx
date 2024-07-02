import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl">Page non trouvée</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
