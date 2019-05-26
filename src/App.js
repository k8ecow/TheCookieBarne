import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Gallery from './Gallery.js';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <h1>The Cookie Barne</h1>
        <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/gallery">Gallery</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/gallery" component={Gallery}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
