import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getProfile, login } from "../../../JS/actions/actionUser";
import "./login.css";

function Login() {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const loading = useSelector((state) => state.userReducer.loading);
  const errors = useSelector((state) => state.userReducer.errors);
  const loginUser = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email,
        password,
      })
    );
  };

  useEffect(() => {
    dispatch(getProfile());
    setError(errors);
  }, []);

  return localStorage.getItem("token") ? (
    <Redirect to={`/ProfileUser/`} />
  ) : loading ? (
    <div className="spinner-border spinner" role="status">
      <span className="sr-only spin">Loading...</span>
    </div>
  ) : (
    <div className="container cont">
      <div className="d-flex justify-content-center h-100">
        <div className="card-login">
          <div className="card-header">
            <h3>Sign In </h3>
            {errors === "Unauthorized" ? (
              <h3></h3>
            ) : (
              <h6 style={{ color: "red" }}>Email or Password are wrong</h6>
            )}

            <div className="d-flex justify-content-end social_icon">
              <span>
                <i className="fab fa-facebook-square"></i>
              </span>
              <span>
                <i className="fab fa-google-plus-square"></i>
              </span>
              <span>
                <i className="fab fa-twitter-square"></i>
              </span>
            </div>
          </div>
          <div className="card-body">
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">✉️</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">🔑</span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="row align-items-center remember">
                <input type="checkbox" />
                Remember Me
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-success float-right login_btn"
                  onClick={loginUser}
                />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Don't have an account?<Link to="chooseuser/signup">Sign Up</Link>
            </div>
            <div className="d-flex justify-content-center">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
