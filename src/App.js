import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About.js';
import Gallery from './components/Gallery.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import Occasions from './components/Occasions.js';
import PlaceOrder from './components/PlaceOrder.js';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <div className="App">
      <Router history={About}>
        <Navbar bg="light" collapseOnSelect expand="lg">
          <Navbar.Brand href="\" className="shadow-font">
            The Cookie Barne
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <LinkContainer to="/" className="nav-links">
                <NavItem>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/about" className="nav-links">
                <NavItem>About Us</NavItem>
              </LinkContainer>
              <LinkContainer to="/gallery" className="nav-links">
                <NavItem>Gallery</NavItem>
              </LinkContainer>
              <LinkContainer to="/occasions" className="nav-links">
                <NavItem>Occasions</NavItem>
              </LinkContainer>
              <LinkContainer to="/order" className="nav-links">
                <NavItem>Place Order</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <h1 className="headerImg">
          <div className="wrapper" />
        </h1>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/about" exact component={About} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/occasions" exact component={Occasions} />
          <Route path="/order" exact component={PlaceOrder} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
