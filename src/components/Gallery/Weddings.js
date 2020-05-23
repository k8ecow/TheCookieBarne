import React, { Component } from 'react';
import GalleryFooter from './GalleryFooter.js';
import '../../styles/Occasions.css';

class Weddings extends Component {
  render() {
    return (
      <div role="main">
        <h2>Weddings</h2>
        <div class="m5">
          <div class="row">
            <div class="column">
              <img
                src="https://cookiebarne.blob.core.windows.net/images/wedding_dresses.jpg"
                alt={'Wedding dresses'}
                className="occasions-gallery"
              />
            </div>
            <div class="column">
              <img
                src="https://cookiebarne.blob.core.windows.net/images/wedding_cakes.jpg"
                alt={'Wedding cakes'}
                className="occasions-gallery"
              />
              <img
                src="https://cookiebarne.blob.core.windows.net/images/wedding_cakes2.jpg"
                alt={'Wedding cakes'}
                className="occasions-gallery"
              />
            </div>
            <div class="column">
              <img
                src="https://cookiebarne.blob.core.windows.net/images/wedding_dresses2.jpg"
                alt={'Wedding dresses'}
                className="occasions-gallery"
              />
            </div>
            <div class="column">
              <img
                src="https://cookiebarne.blob.core.windows.net/images/wedding_dresses3.jpg"
                alt={'Wedding dresses'}
                className="occasions-gallery"
              />
            </div>
          </div>
        </div>
        <GalleryFooter />
      </div>
    );
  }
}

export default Weddings;
