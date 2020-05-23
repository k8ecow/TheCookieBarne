import React, { Component } from 'react';
import GalleryFooter from './GalleryFooter.js';
import '../../styles/Occasions.css';

class School extends Component {
  render() {
    return (
      <div role="main">
        <h2>School</h2>
        <div class="m5">
          <div class="row">
            <div class="column">
              <img
                src="https://cookiebarne.blob.core.windows.net/images/school3.jpeg"
                alt={'School supplies cookies'}
                className="occasions-gallery"
              />
              <img
                src="https://cookiebarne.blob.core.windows.net/images/school2.jpeg"
                alt={'School supplies cookies'}
                className="occasions-gallery"
              />
            </div>
            <div class="column">
              <img
                src="https://cookiebarne.blob.core.windows.net/images/school.jpg"
                alt={'Music notes cookies'}
                className="occasions-gallery"
              />
              <img
                src="https://cookiebarne.blob.core.windows.net/images/school_212.jpg"
                alt={'212 cookies'}
                className="occasions-gallery"
              />
            </div>
            <div class="column">
              <img
                src="https://cookiebarne.blob.core.windows.net/images/school_grad.jpg"
                alt={'Graduation cap cookies'}
                className="occasions-gallery"
              />
              <img
                src="https://cookiebarne.blob.core.windows.net/images/school_miami.jpg"
                alt={'Graduate cookies'}
                className="occasions-gallery"
              />
            </div>
            <div class="column">
              <img
                src="https://cookiebarne.blob.core.windows.net/images/school_physics.jpg"
                alt={'Science cookies'}
                className="occasions-gallery"
              />
              <img
                src="https://cookiebarne.blob.core.windows.net/images/school_utd.jpg"
                alt={'UTD cookies'}
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

export default School;
