import React, { Component } from 'react';
import GalleryFooter from './GalleryFooter.js';
import '../../styles/Occasions.css';

class Holidays extends Component {
  render() {
    return (
      <div>
        <h2>Celebrate the Holidays</h2>
        <img
          src="https://cookiebarne.blob.core.windows.net/images/christmas_elves.jpg"
          alt={'Elf cookies'}
          className="occasions-gallery"
        />
        <br />
        <img
          src="https://cookiebarne.blob.core.windows.net/images/christmas_minis.jpg"
          alt={'Mini Christmas cookies'}
          className="occasions-gallery"
        />
        <GalleryFooter />
      </div>
    );
  }
}

export default Holidays;
