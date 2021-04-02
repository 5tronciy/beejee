import React from "react";
import styles from "./styles.module.css";
import ClampedText from "../ClampedText";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { makeVisible } from "../../store/form/formSlice";
import { ReactComponent as DoneImg } from "../../assets/check.svg";
import { ReactComponent as EditedImg } from "../../assets/edit.svg";

const Task = ({ task }) => {
  const { username, email, text, status } = task;
  const dispatch = useDispatch();

  const loggedIn = useSelector((state) => state.auth.loggedIn);

  return (
    <div className={styles.card}>
      <div className={styles.cardShadow}>
        <div className={styles.userInfo}>
          <div className={styles.content}>
            <span>Name:</span>
            <h5 className={styles.userName}>{username}</h5>
          </div>
          <div className={styles.content}>
            <span>E-mail:</span>
            <h6 className={styles.email}>{email}</h6>
          </div>
        </div>
        <div className={styles.task}>
          <div className={styles.badges}>
            {(status === 10 || status === 11) && <DoneImg />}
            {(status === 1 || status === 11) && <EditedImg />}
          </div>
          <ClampedText className="task-item__text" text={text} />
        </div>
        {loggedIn && (
          <Button onClick={() => dispatch(makeVisible(task))}>Edit</Button>
        )}
      </div>
    </div>
  );
};

export default Task;
