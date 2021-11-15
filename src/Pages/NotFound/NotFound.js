import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not_found">
        <Container  lg="6" className="text-center">
              <h1>404, Page Not Found!</h1>
              <h2>Something's wrong here. You have traveled out of the world</h2>
              <Link to="/home">BACK TO HOMEPAGE</Link>
        </Container>
      </div>
    );
};

export default NotFound;