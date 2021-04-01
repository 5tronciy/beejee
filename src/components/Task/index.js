import React from "react";
import styles from "./styles.module.css";
import ClampedText from "../ClampedText";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { makeVisible } from "../../store/form/formSlice";

const Task = ({ task }) => {
  const { username, email, text } = task;
  const dispatch = useDispatch();

  const loggedIn = useSelector((state) => state.auth.loggedIn);

  return (
    <div className={styles.card}>
      <div className={styles.cardShadow}>
        <div className={styles.content}>
          <span>Name:</span>
          <h5 className={styles.userName}>{username}</h5>
        </div>
        <div className={styles.content}>
          <span>E-mail:</span>
          <h6 className={styles.email}>{email}</h6>
        </div>
        <ClampedText className="task-item__text" text={text} />
        {loggedIn && (
          <Button onClick={() => dispatch(makeVisible(task))}>Edit</Button>
        )}
      </div>
    </div>
  );
};

export default Task;
