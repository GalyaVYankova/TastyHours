import React from 'react';
import Recipes from '../Recipes/Recipes';
import recipeService from '../../services/recipe-service';
import './CreateReceipes.css';

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
        <h3>Сподели Своята Рецепта</h3>
        <form>
            <div>
                <input type="text" ref={titleRef} required></input>
            </div>
            <div>
                <input type="text" ref={imageRef} required></input>
            </div>
            <div>
                <textarea ref={descriptionRef} required></textarea>
            </div>
            <button type="button" onClick={createRecipes}>Напиши Рецепта</button>
        </form>
        <Recipes limit={5} />
    </div>;
}

export default CreateRecipes;
