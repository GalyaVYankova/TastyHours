import React from 'react';
import './Post.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Navbar, Button } from 'react-bootstrap';

function Post({ imageUrl, imageAlt, children }) {

  return <div>
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        {children}
        </Card.Text>
      </Card.Body>
    </Card>
  </div>;
};

export default Post;