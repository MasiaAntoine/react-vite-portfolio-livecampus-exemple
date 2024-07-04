import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { addProject } from "../api/projectsApi";
import FormField from "../components/FormField";

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
        <h2 className="mb-3">Ajouter un Projet</h2>

        {error && <p className="text-red-500">{error}</p>}

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <FormField
            label="Description *"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
          <FormField
            label="Lien *"
            id="link"
            value={link}
            onChange={handleLinkChange}
            required
          />
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              accept=".jpg, .jpeg, .png"
              onChange={handleImageChange}
              className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <Button
            text="Ajouter Projet"
            type="submit"
            color={isDarkMode ? "dark" : "yellow"}
          />
        </form>
      </div>
    </section>
  );
};

export default AddProjectPage;
