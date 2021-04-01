import axios from "./base";

export const getAllTasks = ({ page = 1, sort_direction, sort_field }) => {
  return axios.get("/", {
    params: {
      page: page,
      sort_direction,
      sort_field,
    },
  });
};

export const createTask = ({ username, email, text }) => {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("email", email);
  formData.append("text", text);

  return axios.post("/create", formData);
};

export const updateTask = ({
  data: { text, status },
  id,
  oldText,
  status: oldStatus,
}) => {
  const formData = new FormData();
  formData.append("text", text);
  formData.append("token", localStorage.getItem("token"));
  let newStatus = "0";

  if (text === oldText && oldStatus !== 11 && oldStatus !== 1) {
    if (status) {
      newStatus = "10";
    }
  } else {
    if (status) {
      newStatus = "11";
    } else {
      newStatus = "1";
    }
  }

  formData.append("status", newStatus);

  return axios.post(`/edit/${id}`, formData);
};

const tasks = {
  getAllTasks,
  createTask,
};

export default tasks;
