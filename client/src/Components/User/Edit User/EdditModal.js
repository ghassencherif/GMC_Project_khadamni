import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { editUser } from "../../../JS/actions/actionUser";

function EdditModal(props) {
  const user = useSelector((state) => state.userReducer.user);
  const [updateUser, setUpdateUser] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    setUpdateUser(user);
  }, [user]);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUpdateUser({ ...updateUser, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Form>
        <h1>
          Edit Your Profile {user.firstName} {user.lastName}
        </h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            defaultValue={user.firstName}
            name="firstName"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            defaultValue={user.lastName}
            name="lastName"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            defaultValue={user.email}
            name="email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            defaultValue={user.phoneNumber}
            name="phoneNumber"
            onChange={handleChange}
          />
        </Form.Group>
        <Link to="/ProfileUser">
          <Button variant="secondary">Close</Button>
        </Link>
        <Link to="/ProfileUser">
          <Button
            variant="primary"
            onClick={() => dispatch(editUser(updateUser._id, updateUser))}>
            Save
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default EdditModal;
