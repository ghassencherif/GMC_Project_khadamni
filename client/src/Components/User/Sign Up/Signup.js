import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { register } from "../../../JS/actions/actionUser";
import "./signup.css";

function Signup(props) {
  const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const [lastName, setLastName] = useState();
  const [firstName, setFirstName] = useState();
  const [role, setRole] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const addUser = (e) => {
    e.preventDefault();
    dispatch(
      register({
        lastName,
        firstName,
        role,
        email,
        password,
        phoneNumber,
      })
    );
  };

  useEffect(() => {
    props.match.params.client === "Client" ? setRole(0) : setRole(1);
  }, [setRole]);

  return (
    <div className="Container">
      {loading ? (
        <div className="spinner-border spinner" role="status">
          <span className="sr-only spin">Loading...</span>
        </div>
      ) : user ? (
        <Redirect to="/login" />
      ) : (
        <div className="signup-form">
          <form>
            <h3>Sign Up</h3>

            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Phone"
                name="phoneNumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={addUser}>
              Sign Up
            </button>
            <p className="forgot-password text-right">
              Already registered <a href="#">sign in?</a>
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

export default Signup;
