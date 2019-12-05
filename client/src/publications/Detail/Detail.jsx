import React from 'react';
import Post from '../Posts/Post/Post';
import service from '../../services/post-service';

export default class Detail extends React.Component {
  state = {
    post: null
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    service.load(id).then(post => {
      this.setState({ post });
    });
  }

  render() {
    const { post } = this.state;
    return <div>
    {post ?
      <div className="Posts">
        {post.map((post) =>
        <Post key={post.id}>
          <p>{post._id}</p>
          
          <p>{post.description}</p>
          <p>Author:<span> {post.author.username}</span></p></Post>)}
      </div> : <div>Loading...</div>
    }
  </div>
  }
}
