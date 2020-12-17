import React, { useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../JS/actions/actionUser";
import AnnonceUser from "./AnnonceUser";
import "./style/ProfileUser.css";

const Profile = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  const loading = useSelector((state) => state.userReducer.loading);

  const clear = () => {
    window.localStorage.clear();
    window.location.reload(false);
  };
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  return loading ? (
    <div className="spinner-border spinner" role="status">
      <span className="sr-only spin">Loading...</span>
    </div>
  ) : !isAuth ? (
    <Redirect to="/Login" />
  ) : (
    <div>
      {/* <pre>{JSON.stringify(user)}</pre> */}
      <div className="welcome">
        <p>
          Welcome {capitalize(user.firstName)} {capitalize(user.lastName)}
        </p>
        <Link to="/">
          <button className="btn btn-outline-danger" onClick={() => clear()}>
            Logout
          </button>
        </Link>

        <Link to={`/ProfileUser/edit/user/${user._id}`}>
          <button className="btn btn-outline-primary">Edit</button>
        </Link>
      </div>
      <div className="profile-user">
        <div className="img-profile">
          <img
            src="https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14046.jpg"
            alt="profileimg"
          />
        </div>
        <div className="profile-info">
          <h1>Profile</h1>

          <div className="form-group gp">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              value={user.lastName}
              name="lastName"
            />
          </div>
          <div className="form-group gp">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              value={user.firstName}
              name="firstName"
            />
          </div>
          <div className="form-group gp">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              value={user.email}
              name="email"
            />
          </div>
          <div className="form-group gp">
            <label>Phone Number</label>
            <input
              type="text"
              className="form-control"
              value={user.phoneNumber}
              name="phoneNumber"
            />
          </div>
        </div>
      </div>
      <div className="annonce-sim">
        <h2>List of Ads</h2>
        {isAuth.role !== 1 ? (
          <h3>you do not have the right to create an ad</h3>
        ) : (
          <AnnonceUser />
        )}
      </div>
    </div>
  );
};

export default Profile;
