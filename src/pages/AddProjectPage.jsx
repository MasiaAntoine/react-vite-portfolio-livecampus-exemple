import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { addProject } from "../api/projectsApi";

const AddProjectPage = ({ isDarkMode }) => {
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("description", description);
    formData.append("link", link);
    formData.append("image", image);

    try {
      await addProject(formData);
      navigate("/admin");
    } catch (err) {
      setError(err.message || "Erreur lors de l'ajout du projet.");
    }
  };

  return (
    <section className={`${isDarkMode ? "bg-yellow" : "bg-yellow-light"}`}>
      <h1 className="mb-3">Ajouter un Projet</h1>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-1">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
            className="w-full border rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="link" className="block font-medium mb-1">
            Lien <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={handleLinkChange}
            required
            className="w-full border rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block font-medium mb-1">
            Image
          </label>
          <input
            type="file"
            id="image"
            accept=".jpg, .jpeg, .png"
            onChange={handleImageChange}
            className="w-full border rounded-md p-2"
          />
        </div>
        <Button text="Ajouter Projet" type="submit" color="primary" />
      </form>
    </section>
  );
};

export default AddProjectPage;
