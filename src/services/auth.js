import axios from "./base";

export const login = async ({ username, password }) => {
  const formData = new FormData();

  formData.append("username", username);
  formData.append("password", password);

  return axios.post("/login", formData);
};
