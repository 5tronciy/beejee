import Task from "./Task";
import { useSelector } from "react-redux";

const TaskList = () => {
  const selectedTasks = useSelector((state) => state.tasks);

  return (
    <>
      {selectedTasks.map((task) => (
        <Task
          key={task.id}
          userName={task.userName}
          email={task.email}
          text={task.text}
          completed={task.completed}
        />
      ))}
    </>
  );
};

export default TaskList;
