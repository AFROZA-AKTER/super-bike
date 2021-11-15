import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <>
        <Carousel className="img-fluid">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/GTbY2QT/main-banner2.jpg"
                    alt="slide"
                />
            </Carousel.Item>
        </Carousel>
    </>
    );
};

export default Banner;