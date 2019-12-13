import React from 'react';
import Posts from '../Posts/Posts';
import postService from '../../services/post-service';
import './CreatePost.css';
import { Button, Col, Image, Row, Card, Form, Carousel } from 'react-bootstrap';

const CreatePost = ({ isLogged, history }) => {
    const titleRef = React.useRef();
    const imageRef = React.useRef();
    const descriptionRef = React.useRef();
    const createPost = React.useCallback(() => {
        postService.create({
            title: titleRef.current.value,
            image: imageRef.current.value,
            description: descriptionRef.current.value
        }).then(() => { history.push('/'); });
    }, [titleRef, imageRef, descriptionRef, history]);

    return <div className="CreatePost">
        <form className="recipe-form">
            <div>
                <p>
                    <label for="post-title">Заглавие:</label>
                </p>
                <p>
                    <input id="post-title" ref={titleRef} type="text" required />
                </p>
            </div>
            <div>
                <p>
                    <label for="post-image">Снимка:</label>
                </p>
                <p>
                    <input id="post-image" ref={imageRef} type="text" required />
                </p>
            </div>
            <div>
                <p>
                    <label for="post-description">Описание:</label>
                </p>
                <p>
                    <textarea id="post-description" ref={descriptionRef} required />
                </p>
            </div>
            <div>
            <Button className="gallery-button" variant="primary" onClick={createPost}>Публикувай</Button>    
            </div>
        </form>
    </div>;
}

export default CreatePost;
