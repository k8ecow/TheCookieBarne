import React, { Component } from 'react';
import InstaCarousel from './InstaCarousel.js';

class Home extends Component {
  render() {
    return (
      <div role="main">
        <h2>Welcome!</h2>
        <p className="about">
          The Cookie Barne can help you celebrate any special occasion! <br />
          Our custom-decorated sugar cookies are a perfect way to celebrate
          holidays, birthdays, weddings, graduations, and more!
          <br />
          <br />
          We are located in Cypress, Texas and serve the Houston area.
        </p>
        <div className="InstaCarousel">
          <InstaCarousel account="the_cookie_barne" />
        </div>
        <br />
      </div>
    );
  }
}

export default Home;
