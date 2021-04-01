import tasksService, { createTask, updateTask } from "../../services/tasks";
import { makeInvisible } from "../form/formSlice";
import {
  selectSorting,
  setPage,
  setSortingDirection,
  setSortingField,
  setTasks,
} from "./taskSlice";
import { adminLogout } from "../auth/actions";
import { toast } from "react-toastify";

export const getAllTasks = () => async (dispatch, getState) => {
  const sorting = selectSorting(getState());

  const { tasks, total_task_count } = (
    await tasksService.getAllTasks(sorting)
  ).data.message;

  dispatch(setTasks({ tasks, total_task_count }));
};

export const changePage = (page) => (dispatch) => {
  dispatch(setPage(page));
  dispatch(getAllTasks());
};

export const createNewTask = (formData) => async (dispatch) => {
  await createTask(formData);
  dispatch(getAllTasks());
  dispatch(makeInvisible());

  toast.success("Task Created!");
};

export const editTask = (formData, history) => async (dispatch) => {
  const { data: response } = await updateTask(formData);

  if (response.status === "error" && response.message.token) {
    dispatch(adminLogout());
    history.push("/login");

    toast.error("Token error, logIn again!");
  } else {
    dispatch(getAllTasks());
    dispatch(makeInvisible());

    toast.success("Task edited!");
  }
};

export const changeSortingField = ({ sortField, sortDirection }) => (
  dispatch
) => {
  dispatch(setSortingField(sortField));
  dispatch(setSortingDirection(sortDirection));
  dispatch(getAllTasks());
};
