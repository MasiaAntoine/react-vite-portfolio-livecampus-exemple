import axios from "axios";
import { getProjectsUrl } from "/src/shared/endpoints";

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
