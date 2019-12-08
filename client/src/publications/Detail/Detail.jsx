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
          <Post key={post.id}>
            <p>{post.title}</p>
            <img src={post.image} alt="{post.title}" />
            <p>{post.description}</p>
            <p>Author:<span> {post.author.username}</span></p></Post>
      </div> : <div>Article not found.</div>
      }
      <a href="/posts">Обратно</a>
    </div>
  }
}
