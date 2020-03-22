import React, { Component } from 'react';
import GalleryFooter from './GalleryFooter.js';
import '../../styles/Occasions.css';

class Weddings extends Component {
  render() {
    return (
      <div>
        <h2>Weddings</h2>
        <img
          src="https://cookiebarne.blob.core.windows.net/images/wedding_dresses.jpg"
          alt={'Wedding dresses'}
          className="occasions-gallery"
        />
        <br />
        <img
          src="https://cookiebarne.blob.core.windows.net/images/wedding_cakes.jpg"
          alt={'Wedding cakes'}
          className="occasions-gallery"
        />
        <GalleryFooter />
      </div>
    );
  }
}

export default Weddings;
