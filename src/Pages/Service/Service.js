import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';
import useAuth from '../../hooks/useAuth';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, title, img, price } = service;
    const { setSelectedService, isAdmin } = useAuth(); 
    return (
        <>
            <Col lg={3} md={6} className="mt-5 mb-5 text-center service-detail">
                <Card className="h-100 ">
                    <Card.Img variant="top"    src={img} />
                    <Card.Body>
                        <Card.Title >
                            <h4 style={{color:"#3B3B3B"}}>{title}</h4>
                        </Card.Title>
                       {/*  <Card.Text className="text-muted">
                           {description}
                        </Card.Text> */}
                        <div>
                            <p>${price}</p>
                            <Button
                                className="btn-success"
                                as={Link}
                                to={'/services/' + _id}>
                                Book Now
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
          
        </>
    );
};

export default Service;