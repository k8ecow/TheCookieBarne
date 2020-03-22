import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About.js';
import Home from './components/Home.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Weddings from './components/Gallery/Weddings.js';
import BabyAndKid from './components/Gallery/BabyAndKid.js';
import Holidays from './components/Gallery/Holidays.js';
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
              <LinkContainer to="/home" className="nav-links">
                <Button variant="light">Home</Button>
              </LinkContainer>
              <NavDropdown
                className="dropdown-nav-button"
                title={<span className="dropdown-nav-text">Gallery</span>}
              >
                <LinkContainer
                  to="/gallery/weddings"
                  className="dropdown-nav-text"
                >
                  <NavDropdown.Item>Weddings</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer
                  to="/gallery/babyandkid"
                  className="dropdown-nav-text"
                >
                  <NavDropdown.Item>Baby And Kid</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer
                  to="/gallery/holidays"
                  className="dropdown-nav-text"
                >
                  <NavDropdown.Item>Holidays</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/order" className="nav-links">
                <Button variant="light">Place Order</Button>
              </LinkContainer>
              <LinkContainer to="/about" className="nav-links">
                <Button variant="light">About Us</Button>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <h1 className="headerImg">
          <div className="wrapper" />
        </h1>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/gallery/weddings" component={Weddings} />
          <Route path="/gallery/babyandkid" component={BabyAndKid} />
          <Route path="/gallery/holidays" component={Holidays} />
          <Route path="/order" exact component={PlaceOrder} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
