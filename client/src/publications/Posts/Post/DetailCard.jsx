import React from 'react';
import './Post.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Navbar, Button } from 'react-bootstrap';

function DetailCard({ imageUrl, imageAlt, children }) {

  return <div className="Details">
    <Card className="detailed-card">
      <Card.Body>
        <Card.Text className="post-title">{children}</Card.Text>
      </Card.Body>
    </Card>
  </div>;
};

export default DetailCard;
