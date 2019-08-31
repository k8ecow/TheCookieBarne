import React, { Component } from 'react';
import InstaCarousel from './InstaCarousel.js';

class Gallery2 extends Component {
  render() {
    return (
      <div>
        <h2>Gallery</h2>
        <div className="InstaCarousel">
          <InstaCarousel account="the_cookie_barne" />
        </div>
      </div>
    );
  }
}

export default Gallery2;
