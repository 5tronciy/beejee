import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Form } from "react-bootstrap";
import { loginAdmin } from "../../store/auth/actions";
import { selectLoginError } from "../../store/auth/authSlice";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const loginError = useSelector(selectLoginError);

  return (
    <>
      {loginError.error && (
        <Alert variant="danger">{loginError.errorMessage}</Alert>
      )}
      <Form
        onSubmit={handleSubmit((data) => dispatch(loginAdmin(data, history)))}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            required
            name="username"
            ref={register({ required: true })}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            name="password"
            ref={register({ required: true })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enter
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
