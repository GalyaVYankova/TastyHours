import React from 'react';
import DetailCard from '../Posts/Post/DetailCard';
import service from '../../services/post-service';
import './Detail.css'

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
        <div className="posts-detailed">
          <DetailCard key={post.id} className="detailed-posts">
            <h5>{post.title}</h5>
            <img src={post.image} alt="{post.title}" />
            <p className="detailed-p">{post.description}</p>
            <a href="/posts">Обратно</a>
          </DetailCard>
        </div> : <div>Статията не беше намерена<a href="/posts">Обратно</a></div>
      }
    </div>
  }
}
