import React, { Component } from 'react';
import GalleryFooter from './GalleryFooter.js';
import '../../styles/Occasions.css';

class Birthday extends Component {
  render() {
    return (
      <div role="main">
        <h2>Birthday</h2>
        <div class="m5">
          <div class="row">
            <div class="column">
              <img
                src="https://cookiebarne.blob.core.windows.net/images/birthday.jpg"
                alt={'Birthday cake cookies'}
                className="occasions-gallery"
              />
            </div>
            <div class="column">
              <img
                src="https://cookiebarne.blob.core.windows.net/images/birthday_donut.jpg"
                alt={'Pink donut cookies'}
                className="occasions-gallery"
              />
            </div>
            <div class="column">
              <img
                src="https://cookiebarne.blob.core.windows.net/images/birthday_gold.jpg"
                alt={'Champagne cookies'}
                className="occasions-gallery"
              />
            </div>
            <div class="column">
              <img
                src="https://cookiebarne.blob.core.windows.net/images/birthday_icecream.jpg"
                alt={'Ice cream cookies'}
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

export default Birthday;
