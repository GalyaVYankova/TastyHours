import React from 'react';
import Recipes from '../Recipes/Recipes';
import recipeService from '../../services/recipe-service';
import './CreateReceipes.css';

const CreateRecipes = ({ isLogged, history }) => {
    const title = React.useRef();
    const image = React.useRef();
    const textareaRef = React.useRef();
    const createRecipes = React.useCallback(() => {
        const value1 = title.current.value1;
        const value2 = image.current.value2;
        const value = textareaRef.current.value;
        recipeService.create({ title: value1, image: value2, description: value })
            .then(() => { history.push('/'); });
    }, [textareaRef, history]);

    return <div className="recipes">
        <h3>Сподели Своята Рецепта</h3>
        <form>
            <div>
                <input type="text" ref={title} required></input>
            </div>
            <div>
                <input type="text" ref={image} required></input>
            </div>
            <div>
                <textarea ref={textareaRef} required></textarea>
            </div>
            <button type="button" onClick={createRecipes}>Create Recipe</button>
        </form>
        <Recipes limit={5} />
    </div>;
}

export default CreateRecipes;
