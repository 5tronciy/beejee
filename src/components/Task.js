const Task = ({ userName, email, text, completed }) => {
  return (
    <>
      <div>{userName}</div>
      <div>{email}</div>
      <div>{text}</div>
      <div>{completed}</div>
    </>
  );
};

export default Task;
