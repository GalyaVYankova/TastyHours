import React from 'react';
import PropTypes from 'prop-types';
import './Recipes.css';
import Recipe from './Recipe/Recipe';
import recipeService from '../../services/recipe-service';
import { Button, Col, Image, Row, Card, Form, Carousel } from 'react-bootstrap';

class Recipes extends React.Component {

  state = {
    recipes: null
  };
  textInput = null;

  componentDidMount() {
    recipeService.load().then(recipes => {
      this.setState({ recipes });
    });
  }

  inputChangeHandler = (e) => {
    console.log(e.target.value);
  }

  render() {
    const { recipes } = this.state;

    return <div>
      {recipes ?
        <div className="Recipes">
          {recipes.map((recipe) =>
            <Recipe key={recipe.id}>
              <p>{recipe.title}</p>
              <p>{recipe.image}</p>
              <p className="post-p">{recipe.description}</p>
              <a href={'/post/' + recipe._id}>{recipe._id}</a>
              <p>Author:<span> {recipe.author.username}</span></p></Recipe>)}
        </div> : <div>Loading...</div>
      }
    </div>
  }
}

Recipes.propTypes = {
  limit: PropTypes.number
}

export default Recipes;
