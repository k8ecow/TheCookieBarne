import React, { Component } from 'react';
import '../styles/Occasions.css';
import ScrollableAnchor from 'react-scrollable-anchor';

class Occasions extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <ScrollableAnchor id={'wedding'}>
          <div>
            <h2>Weddings</h2>
            <img
              src={require('../assets/weddings/dresses.jpg')}
              alt={'Wedding dresses'}
              className="occasions-gallery"
            />
            <br />
            <img
              src={require('../assets/weddings/cakes.jpg')}
              alt={'Wedding cakes'}
              className="occasions-gallery"
            />
          </div>
        </ScrollableAnchor>
        <br />
        <br />
        <ScrollableAnchor id={'babyshower'}>
          <div>
            <h2>Baby Showers</h2>
            <img
              src={require('../assets/babyshowers/baby.jpg')}
              alt={'Baby shower cookies'}
              className="occasions-gallery"
            />
          </div>
        </ScrollableAnchor>
        <br />
        <br />
        <ScrollableAnchor id={'christmas'}>
          <div>
            <h2>Christmas Gifts</h2>
            <img
              src={require('../assets/christmas/elves.jpg')}
              alt={'Elf cookies'}
              className="occasions-gallery"
            />
            <br />
            <img
              src={require('../assets/christmas/minis.jpg')}
              alt={'Mini Christmas cookies'}
              className="occasions-gallery"
            />
          </div>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default Occasions;
