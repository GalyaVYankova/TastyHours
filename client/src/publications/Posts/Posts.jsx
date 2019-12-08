import React from 'react';
import PropTypes from 'prop-types';
import './Posts.css';
import Post from './Post/Post';
import postService from '../../services/post-service';
import { Button, Col, Image, Row, Card, Form, Carousel } from 'react-bootstrap';

class Posts extends React.Component {

  state = {
    posts: null
  };
  textInput = null;

  componentDidMount() {
    // pictureService.load().then(pictures => {
    //   console.log(pictures);
    // });
    postService.load(null, this.props.limit).then(posts => {
      this.setState({ posts });
    });
  }

  inputChangeHandler = (e) => {
    console.log(e.target.value);
  }

  render() {
    const { posts } = this.state;

    return <div>
      {posts ?
        <div className="Posts">
          {posts.map((post) =>
            <Post key={post.id}>
              <h5>{post.title}</h5>
              <img src={post.image} alt="post.title"/>
              <p className="post-p">{post.description}</p>
              <a href={'/post/' + post._id}>{post._id}</a></Post>)}
        </div> : <div>Loading...</div>
      }
    </div>
  }
}

Posts.propTypes = {
  limit: PropTypes.number
}

export default Posts;