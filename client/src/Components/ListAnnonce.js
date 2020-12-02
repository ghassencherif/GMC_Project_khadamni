import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


import './style/listannonce.css'

function ListAnnonce({annonce}) {
    
    return (
        <div className="listAnnonce">
            {annonce.map((el,i) => 
            <Card key={i} className="card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.devis-plombier.tn/assets/images/plombier-professionnel-de-qualite.jpg" />
                    <Card.Body className="cardbody">
                        <Card.Title className="cardtitle">{el.title}</Card.Title>
                        <Card.Text className="cardtext">
                        <span>📍</span>{el.address}
                        </Card.Text>
                        <Button className="card-btn" variant="outline-info">Afficher L'annonce</Button>
                    </Card.Body>
            </Card>
            )}
        </div>
    )
}

export default ListAnnonce

