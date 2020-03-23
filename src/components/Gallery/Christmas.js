import React, { Component } from 'react';
import GalleryFooter from './GalleryFooter.js';
import '../../styles/Occasions.css';

class Christmas extends Component {
  render() {
    return (
      <div>
        <h2>Christmas</h2>
        <div class="m5">
          <div class="row">
            <div class="column">
              <img
                src="https://cookiebarne.blob.core.windows.net/images/christmas_elves.jpg"
                alt={'Elf cookies'}
                className="occasions-gallery"
              />
              <img
                src="https://cookiebarne.blob.core.windows.net/images/christmas_minis.jpg"
                alt={'Mini Christmas cookies'}
                className="occasions-gallery"
              />
            </div>
            <div class="column">
              <img
                src="https://cookiebarne.blob.core.windows.net/images/christmas_snowmen.jpg"
                alt={'Mini Christmas cookies'}
                className="occasions-gallery"
              />
              <img
                src="https://cookiebarne.blob.core.windows.net/images/christmas_believeBox.jpg"
                alt={'Mini Christmas cookies'}
                className="occasions-gallery"
              />
            </div>
            <div class="column">
              <img
                src="https://cookiebarne.blob.core.windows.net/images/christmas_trees.jpg"
                alt={'Mini Christmas cookies'}
                className="occasions-gallery"
              />
              <img
                src="https://cookiebarne.blob.core.windows.net/images/christmas_gingerbread.jpg"
                alt={'Mini Christmas cookies'}
                className="occasions-gallery"
              />
            </div>
            <div class="column">
              <img
                src="https://cookiebarne.blob.core.windows.net/images/christmas_poinsettia.jpg"
                alt={'Mini Christmas cookies'}
                className="occasions-gallery"
              />
              <img
                src="https://cookiebarne.blob.core.windows.net/images/christmas_snowflakes.jpg"
                alt={'Mini Christmas cookies'}
                className="occasions-gallery"
              />
              <img
                src="https://cookiebarne.blob.core.windows.net/images/christmas_snowflakes2.jpg"
                alt={'Mini Christmas cookies'}
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

export default Christmas;
