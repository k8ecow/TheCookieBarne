import React, { Component } from 'react';
import GalleryFooter from './GalleryFooter.js';
import '../../styles/Occasions.css';

class BabyAndKid extends Component {
  render() {
    return (
      <div role="main">
        <h2>Baby And Kid</h2>
        <div class="m5">
          <div class="row">
            <div class="column">
              <img
                src="https://cookiebarne.blob.core.windows.net/images/baby.jpg"
                alt={'Baby shower cookies minis'}
                className="occasions-gallery"
              />
            </div>
            <div class="column">
              <img
                src="https://cookiebarne.blob.core.windows.net/images/baby2.jpg"
                alt={'Baby shower cookies minis'}
                className="occasions-gallery"
              />
            </div>
            <div class="column">
              <img
                src="https://cookiebarne.blob.core.windows.net/images/baby3.jpg"
                alt={'Baby shower cookies minis'}
                className="occasions-gallery"
              />
            </div>
            <div class="column">
              <img
                src="https://cookiebarne.blob.core.windows.net/images/babykid_cars.jpg"
                alt={'Racecar cookies'}
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

export default BabyAndKid;
