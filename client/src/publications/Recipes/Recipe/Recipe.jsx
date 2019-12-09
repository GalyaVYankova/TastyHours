import React from 'react';
import './Recipe.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Navbar, Button } from 'react-bootstrap';

function Recipe({ imageUrl, imageAlt, children }) {

  return<div>{children}</div>;
};

export default Recipe;
