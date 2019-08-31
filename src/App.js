import React from 'react';
import logo from './assets/cookiebarne-logo.png';
import './App.css';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Gallery from './Gallery.js';
import Gallery2 from './Gallery2.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ScrollableAnchor from 'react-scrollable-anchor';

function App() {
  return (
    <div className="App">
      <Navbar sticky="top" bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            className="cookiebarne-logo d-inline-block align-top"
            height="30"
            alt="The Cookie Barne Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#gallery2">Gallery Option 2</Nav.Link>
            <Nav.Link href="#order">Place an Order</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <h1 className="headerImg">
        <div className="wrapper" />
      </h1>
      <ScrollableAnchor id={'about'}>
        <About />
      </ScrollableAnchor>
      <ScrollableAnchor id={'gallery2'}>
        <Gallery2 />
      </ScrollableAnchor>
      <ScrollableAnchor id={'gallery'}>
        <Gallery />
      </ScrollableAnchor>
      <ScrollableAnchor id={'order'}>
        <Contact />
      </ScrollableAnchor>
    </div>
  );
}

export default App;
