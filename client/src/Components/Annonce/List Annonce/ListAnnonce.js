import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "./listannonce.css";

function ListAnnonce(props) {
  return (
    <div className="listAnnonce">
      {props.annonce.map((el, i) => (
        <Card key={i} className="card" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            className="annonce-img"
            src="https://www.devis-plombier.tn/assets/images/plombier-professionnel-de-qualite.jpg"
          />
          <Card.Body className="cardbody">
            <Card.Title className="cardtitle">{el.title}</Card.Title>
            <Card.Text className="cardtext">
              <span>📍</span>
              {el.address}
            </Card.Text>
            <Card.Text className="cardtext">{el.category.typeCat}</Card.Text>
            <Link
              style={{ textDecoration: "none" }}
              to={`/annoncedetails/${el.title}`}>
              <Button className="card-btn" variant="outline-info">
                Afficher L'annonce
              </Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ListAnnonce;
