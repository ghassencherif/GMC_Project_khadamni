import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { getUserAnnonce } from "../../../JS/actions/actionUser";
import { deleteAnnonce } from "../../../JS/actions/actionAnnonce";
import { Link } from "react-router-dom";

function AnnonceUser() {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAnnonce(user._id));
  }, []);

  return (
    <div style={{ flexWrap: "wrap", display: "flex", marginLeft: "50px" }}>
      {user.annonceUser.map((el, i) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img
            style={{ marginLeft: "-1px" }}
            variant="top"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17670bf50ba%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17670bf50ba%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5390625%22%20y%3D%2297.5%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          />
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <div className="btn-annonce">
              <Link to={`/ProfileUser/edit-annonce/${el._id}`}>
                <Button style={{ marginRight: "4px" }} variant="primary">
                  Edit
                </Button>
              </Link>
              <Link to="/">
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteAnnonce(el._id))}>
                  Delete
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default AnnonceUser;
