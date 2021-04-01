import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  makeInvisible,
  selectFormVisibility,
} from "../../store/form/formSlice";
import CreateTaskForm from "../CreateTaskForm";

const CreateTaskModal = () => {
  const dispatch = useDispatch();
  const visible = useSelector(selectFormVisibility);

  return (
    <Modal show={visible} onHide={() => dispatch(makeInvisible())} centered>
      <Modal.Header closeButton>
        <Modal.Title>Task Create</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateTaskForm />
      </Modal.Body>
    </Modal>
  );
};

export default CreateTaskModal;
