import { login } from "../../services/auth";
import { authError, authStart, authSuccess, logout } from "./authSlice";

export const loginAdmin = (data, history) => async (dispatch) => {
  dispatch(authStart());
  try {
    const { data: response } = await login(data);

    if (response.status !== "error") {
      dispatch(authSuccess());
      localStorage.setItem("token", response.message.token);
      history.push("/");
    } else {
      dispatch(authError(response.message.password));
    }
  } catch (error) {
    dispatch(authError(error.data.message));
  }
};

export const adminLogout = () => (dispatch) => {
  dispatch(logout());
  localStorage.removeItem("token");
};

export const tokenError = () => (dispatch) => {
  dispatch(adminLogout());
};
