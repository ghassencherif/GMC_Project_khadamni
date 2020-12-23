import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { editAnnonce, getAnnonce } from "../../../JS/actions/actionAnnonce";

function EditAnnonce(props) {
  const list = useSelector((state) => state.annonceReducer.list);
  const id = props.match.params._id;
  const [updateAnnonce, setUpdateAnnonce] = useState([
    {
      title: "",
      description: "",
      address: "",
      phoneNumber: "",
    },
  ]);

  useEffect(() => {
    dispatch(getAnnonce(id));
    setUpdateAnnonce(list);
  }, []);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUpdateAnnonce({ ...updateAnnonce, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Form>
        <h1>Edit Your Announce</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            defaultValue={list.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            defaultValue={list.description}
            rows={3}
            name="description"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            defaultValue={list.address}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            defaultValue={list.phoneNumber}
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
            onClick={() => dispatch(editAnnonce(id, updateAnnonce))}>
            Save
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default EditAnnonce;
