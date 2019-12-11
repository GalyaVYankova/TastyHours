import React from 'react';
import Posts from '../Posts/Posts';
import postService from '../../services/post-service';
import './CreatePost.css';

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
        <form>
            <div>
                <input ref={titleRef} type="text" required />
            </div>
            <div>
                <input ref={imageRef} type="text" required />
            </div>
            <div>
                <textarea ref={descriptionRef} required />
            </div>
            <div>
                <button type="button" onClick={createPost}>Публикувай</button>
            </div>
        </form>
        <Posts limit={5} />
    </div>;
}

export default CreatePost;
