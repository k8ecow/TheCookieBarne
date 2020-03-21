import React, { Component } from 'react';
import '../styles/About.css';

class About extends Component {
  render() {
    return (
      <div>
        <h2>About Us</h2>
        <p className="about">
          The Cookie Barne can help you celebrate any special occassion! <br />
          Our custom-decorated sugar cookies are a perfect way to celebrate
          holidays, birthdays, weddings, graduations, and more!
          <br />
          We are located in Cypress, Texas and serve the Houston area.
        </p>
      </div>
    );
  }
}

export default About;
