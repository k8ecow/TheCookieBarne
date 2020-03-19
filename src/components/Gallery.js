import React, { Component } from 'react';
import InstaCarousel from './InstaCarousel.js';

class Gallery extends Component {
  render() {
    return (
      <div>
        <h2>Gallery</h2>
        <div className="InstaCarousel">
          <InstaCarousel account="the_cookie_barne" />
        </div>
        <br />
        <p>
          {' '}
          Check out our full gallery on{' '}
          <a href="https://www.instagram.com/the_cookie_barne/">Instagram</a>
        </p>
      </div>
    );
  }
}

export default Gallery;
