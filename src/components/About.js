import React, { Component } from 'react';
import '../styles/About.css';

class About extends Component {
  render() {
    return (
      <div role="main">
        <div class="title">
          <h2>About The Cookie Barne</h2>
        </div>
        <img
          src="https://cookiebarne.blob.core.windows.net/about/profile_picture.JPG"
          alt={'Rhonda Cowden, founder of The Cookie Barne'}
          className="profile-picture"
        />
        <p className="about">
          The Cookie Barne is a female-owned business in Cypress, Texas, serving
          the greater Houston area since 2019. Our founder, Rhonda, has always
          had a passion and talent for creative projects! She started The Cookie
          Barne after discovering how her hobby and artistic skills could bring
          joy to the community. Our motto is, "Our cookies taste 'happy!'"
          because we truly hope that our cookies brighten your day.
          <br />
          <br />
          We love staying engaged in our local community and helping you
          celebrate your special occassions! Our custom-decorated sugar cookies
          are a perfect way to celebrate holidays, birthdays, weddings,
          graduations, and more. Thanks for supporting our small business!
        </p>
      </div>
    );
  }
}

export default About;
