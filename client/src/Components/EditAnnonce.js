import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { editAnnonce } from "../JS/actions/actionAnnonce";

function EditAnnonce(props) {
  const annonces = useSelector((state) => state.annonceReducer.annonces);
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
    setUpdateAnnonce(annonces);
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
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your New Address"
            name="address"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone Number"
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
