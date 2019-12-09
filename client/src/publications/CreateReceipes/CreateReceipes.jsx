import React from 'react';
import Recipes from '../Recipes/Recipes';
import recipeService from '../../services/recipe-service';
import './CreateReceipes.css';
import { Button, Col, Image, Row, Card, Form, Carousel } from 'react-bootstrap';

const CreateRecipes = ({ isLogged, history }) => {
    const titleRef = React.useRef();
    const imageRef = React.useRef();
    const descriptionRef = React.useRef();
    const createRecipes = React.useCallback(() => {
        recipeService.create({
            title: titleRef.current.value,
            image: imageRef.current.value,
            description: descriptionRef.current.value
        })
            .then(() => {
                history.push('/');
                history.push('/recipes');
            });
    }, [titleRef, imageRef, descriptionRef, history]);

    return <div className="recipes">
        <form className="recipe-form">
        <h4>Сподели Своята Рецепта</h4>
            <div>
                <p>
                    <label for="recipe-title">Заглавие:</label>
                </p>
                <p>
                    <input id="recipe-title" type="text" ref={titleRef} required></input>
                </p>
            </div>
            <div>
                <p>
                    <label for="recipe-text">Съставки:</label>
                </p>
                <p>
                    <textarea id="recipe-text" type="text" ref={imageRef} required></textarea>
                </p>
            </div>
            <div>
                <p>
                    <label for="recipe-description">Начин на приготвяне:</label>
                </p>
                <p>
                    <textarea id="recipe-description" ref={descriptionRef} required></textarea>
                </p>
            </div>
            <Button className="gallery-button" variant="primary" onClick={createRecipes}>Публикувай</Button>
        </form>
    </div>;
}

export default CreateRecipes;
