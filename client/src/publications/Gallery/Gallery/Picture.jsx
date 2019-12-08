import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Navbar, Button } from 'react-bootstrap';

function Picture({ imageUrl, imageAlt, children }) {

  return <div className="picture-image">
    <Card>
      <Card.Body>
        <Card.Text className="picture-text">{children}</Card.Text>
      </Card.Body>
    </Card>
  </div>;
};

export default Picture;
