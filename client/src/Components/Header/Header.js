import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../JS/actions/actionUser";
import "./header.css";

function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const notagent = () => {
    alert(`Your are not an Agent \n You can't add an Ad`);
  };
  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return (
    <div className="header">
      <div className="logo">
        <h1>
          <Link to="/" className="logo" style={{ textDecoration: "none" }}>
            Khadamni
          </Link>
        </h1>
      </div>

      <div className="login">
        <Link
          to="/Login"
          className="login-btn"
          style={{ textDecoration: "none" }}>
          {!isAuth ? "Login" : "Profile"}
        </Link>

        {!isAuth ? (
          <Link
            to="/chooseuser"
            className="register-btn"
            style={{ textDecoration: "none" }}>
            Register
          </Link>
        ) : isAuth.role !== 1 ? (
          <Link
            to="/ProfileUser"
            className="register-btn"
            style={{ textDecoration: "none" }}
            onClick={() => notagent()}>
            Not Authorized
          </Link>
        ) : (
          <Link
            to={`/ProfileUser/${isAuth._id}/addannonce`}
            className="register-btn"
            style={{ textDecoration: "none" }}>
            Add an AD
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
