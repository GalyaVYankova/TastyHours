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
            <Recipe key={recipe.id} className="recipe-card">
              <div className="recipe-body">
              <h4>~~{recipe.title}~~</h4>
              <p className="recipe-title">Съставки:</p> 
              <p className="recipe-description">{recipe.image}</p>
              <p className="recipe-title">Начин на приготвяне:</p> 
              <p className="recipe-description">{recipe.description}</p>
              <p className="recipe-author">Автор:<span> {recipe.author.username}</span></p></div></Recipe>)}
        </div> : <div className="loader">Зареждане...</div>
      }
    </div>
  }
}

Recipes.propTypes = {
  limit: PropTypes.number
}

export default Recipes;
