/*eslint-disable no-undef */
import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Gallery.css';
import Picture from './Gallery/Picture';
import postService from '../../services/post-service';
import pictureService from '../../services/picture-service';
import { Button, Col, Image, Row, Card, Form, Carousel } from 'react-bootstrap';

const myWidget = cloudinary.createUploadWidget({
  cloudName: 'dzthaj5xd',
  apiKey: '992255713415115',
  uploadPreset: 'TastyHours'
}, (error, result) => {
  if (!error && result && result.event === "success") {
    console.log('Done! Here is the image info: ', result.info);
    console.log('URL', result.info.url);
    pictureService.create({ url: result.info.url }).then((res) => {
      console.log(res);
    });
  }
});

class Gallery extends React.Component {

  state = {
    pictures: null
  };
  textInput = null;

  componentDidMount() {
    pictureService.load().then(pictures => {
      this.setState({ pictures });
    });
  }

  render() {
    const { pictures } = this.state;
    const that = this;
    const refreshGallery = function () {
      pictureService.load().then(pictures => {
        that.setState({ pictures });
      });
    };

    return <div className="createPicture">
         <Button className="gallery-button" variant="primary" onClick={() => myWidget.open()}>Качи снимка</Button>
         <Button className="gallery-button" variant="primary" onClick={refreshGallery}>Презареди</Button>
      {pictures ?
        <div className="Pictures">
          {pictures.map((picture) =>
            <Picture key={picture.id}>
              <img src={picture.url} alt="test" />
              <p>Author:<span> {picture.author.username}</span></p></Picture>)}
        </div> : <div>Loading...</div>
      }


    </div>


  }
}

export default Gallery;