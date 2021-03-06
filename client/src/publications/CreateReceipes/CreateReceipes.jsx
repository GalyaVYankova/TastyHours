import React from 'react';
import Recipes from '../Recipes/Recipes';
import recipeService from '../../services/recipe-service';
import './CreateReceipes.css';
import { Button, Col, Image, Row, Card, Form, Carousel } from 'react-bootstrap';

const CreateRecipes = ({ isLogged, history }) => {
    const titleRef = React.useRef();
    const imageRef = React.useRef();
    const descriptionRef = React.useRef();
    const titleError = (titleRef.current && titleRef.current.value.length == 0) ? true : false;
    const imageError = (imageRef.current && imageRef.current.value.length == 0) ? true : false;
    const descriptionError = (descriptionRef.current && descriptionRef.current.value.length == 0) ? true : false;

    const createRecipes = React.useCallback(() => {
        let title = titleRef.current.value;
        let image = imageRef.current.value;
        let description = descriptionRef.current.value;
        if (title.length > 0 && image.length > 0 && description.length > 0) {
            recipeService.create({
                title: title,
                image: image,
                description: description
            })
                .then(() => {
                    history.push('/');
                    history.push('/recipes');
                });
        } else {
            // validation failed handling
            // refresh same page
            history.push('/create-recipes');
        }
    }, [titleRef, imageRef, descriptionRef, history]);

    return <div className="recipes">
        <form className="recipe-form">
            <h4>Сподели Своята Рецепта</h4>
            <div>
                <p>
                    <label for="recipe-title">Заглавие:</label>
                </p>
                <p>
                    <input id="recipe-title" type="text" ref={titleRef} required />
                    {titleError ? <div className="error">Заглавието е задължително</div> : ''}
                </p>
            </div>
            <div>
                <p>
                    <label for="recipe-text">Съставки:</label>
                </p>
                <p>
                    <textarea id="recipe-text" type="text" ref={imageRef} required></textarea>
                    {imageError ? <div className="error">Необходими са съставки</div> : ''}
                </p>
            </div>
            <div>
                <p>
                    <label for="recipe-description">Начин на приготвяне:</label>
                </p>
                <p>
                    <textarea id="recipe-description" ref={descriptionRef} required></textarea>
                    {descriptionError ? <div className="error">Необходим е начин на приготвяне</div> : ''}
                </p>
            </div>
            <Button className="gallery-button" variant="primary" onClick={createRecipes}>Публикувай</Button>
        </form>
    </div>;
}

export default CreateRecipes;
