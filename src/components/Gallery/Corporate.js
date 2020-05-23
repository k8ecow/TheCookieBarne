import React, { Component } from 'react';
import GalleryFooter from './GalleryFooter.js';
import '../../styles/Occasions.css';

class Corporate extends Component {
  render() {
    return (
      <div role="main">
        <h2>Corporate</h2>
        <img
          src="https://cookiebarne.blob.core.windows.net/images/baby.jpg"
          alt={'Baby shower cookies'}
          className="occasions-gallery"
        />
        <GalleryFooter />
      </div>
    );
  }
}

export default Corporate;
