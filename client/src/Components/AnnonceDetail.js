import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../JS/actions/actionUser";
import "./style/AnnonceDetail.css";
import Button from "react-bootstrap/esm/Button";

function AnnonceDetail(props) {
  const add = props.annonce.find((el) => el.title === props.match.params.title);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  return (
    <div>
      <div>
        <div className="flech">
          <Link style={{ textDecoration: "none" }} to="/">
            🢀
          </Link>
        </div>
        <div className="white-box">
          <div className="annonce-img">
            <img
              src="https://lh3.googleusercontent.com/proxy/qrVCvWw6h0R94xzqSHgD_h5zwB1WLBLxDKqtI6O6WWQTMc8QFSGeJ0WINvlevnakES8nBlovlZXGGwz3Q-7xxdDWUmoQam-f1BBZll_KC-ZVllUIda6Cty5lri4"
              alt="img-annonce"
            />
          </div>
          <div className="annonce-description">
            <h2>Title</h2>
            <h3>{add.title}</h3>
            <br />
            <div>
              <h2>Description</h2>
              <h5>{add.description}</h5>
              <div className="information">
                <p>🏠 Address: {add.address}</p>
                <p>
                  📞 Phone Number:{" "}
                  {isAuth ? (
                    add.phoneNumber
                  ) : (
                    <Link to="/chooseuser/signup">
                      <Button className="card-btn" variant="outline-info">
                        Click Here
                      </Button>
                    </Link>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnonceDetail;
