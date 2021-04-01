import { combineReducers } from "redux";
import tasksReducer from "../features/tasks/taskSlice";

export default combineReducers({
  tasks: tasksReducer,
});
