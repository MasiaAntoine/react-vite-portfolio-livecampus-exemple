const REACT_APP_API_BASE_URL = "http://127.0.0.1:3000";

export const getProjectsUrl = REACT_APP_API_BASE_URL + "/api/projects/";
export const deleteProjectUrl = (id) =>
  REACT_APP_API_BASE_URL + `/api/projects/${id}`;
export const connexionUrl = REACT_APP_API_BASE_URL + "/api/users/login/";
