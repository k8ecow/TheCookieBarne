import React, { Component } from 'react';
import GalleryFooter from './GalleryFooter.js';
import '../../styles/Occasions.css';

class BabyAndKid extends Component {
  render() {
    return (
      <div>
        <h2>Baby And Kid</h2>
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

export default BabyAndKid;
