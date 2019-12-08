/*eslint-disable no-undef */
import React from 'react';
import Posts from '../Posts/Posts';
import postService from '../../services/post-service';
import './CreatePost.css';


const CreatePost = ({ isLogged, history }) => {
  const textareaRef = React.useRef();
  const createPost = React.useCallback(() => {
    const value = textareaRef.current.value;
    postService.create({ description: value })
      .then(() => { history.push('/'); });
  }, [textareaRef, history]);

  return <div className="CreatePost">
    <form>
      <div>
      <textarea ref={textareaRef} required></textarea>
      </div>
      <div>
      <button type="button" onClick={createPost}>Create Post</button>
      </div>
    </form>
    <Posts limit={5} />
  </div>;
}

export default CreatePost;
