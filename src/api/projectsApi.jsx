import axios from "axios";
import { getProjectsUrl, deleteProjectUrl } from "/src/shared/endpoints";

const getAuthToken = () => {
  return localStorage.getItem("token");
};

export const getProjects = async () => {
  try {
    const response = await axios.get(getProjectsUrl);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "Erreur lors de la récupération des projets."
    );
  }
};

export const deleteProjectById = async (id) => {
  try {
    await axios.delete(deleteProjectUrl(id), {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "Erreur lors de la suppression du projet."
    );
  }
};
