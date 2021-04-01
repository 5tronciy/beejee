import { useDispatch, useSelector } from "react-redux";
import { selectTasks } from "../../store/tasks/taskSlice";
import React, { useEffect } from "react";
import Task from "../Task";
import "./TasksList.scss";
import { getAllTasks } from "../../store/tasks/actions";

const TasksList = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  const renderedTasks =
    tasks.length > 0 ? (
      tasks.map((task) => <Task key={task.id} task={task} />)
    ) : (
      <div>No any tasks</div>
    );

  return <div className="row tasks-row">{renderedTasks}</div>;
};

export default TasksList;
