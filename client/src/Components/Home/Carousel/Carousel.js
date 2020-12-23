import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

const CarouselS = () => {
  return (
    <Carousel>
    <Carousel.Item>
        <img
        className = "d-block w-100"
        src       = "https://chauffagiste-ixelles.be/wp-content/uploads/2014/02/banner-plombier-chauffagiste-4.jpg"
        alt       = "First slide"
        />
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <span aria-hidden="true" className="carousel-control-next-icon" />
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className = "d-block w-100"
        src       = "https://k6r7m2d4.stackpathcdn.com/wp-content/uploads/2012/04/Natural-History-980x306.jpg"
        alt       = "Third slide"
        />

        <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className = "d-block w-100"
        src       = "https://wwwnaringslivshi.cdn.triggerfish.cloud/uploads/2019/01/thuledatacenter-980x306.jpg"
        alt       = "Third slide"
        />

        <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
  );
}

export default CarouselS;