import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About.js';
import Gallery from './components/Gallery.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
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
              <LinkContainer to="/about" className="nav-links">
                <Button variant="light">About Us</Button>
              </LinkContainer>
              <LinkContainer to="/gallery" className="nav-links">
                <Button variant="light">Gallery</Button>
              </LinkContainer>
              <NavDropdown
                className="dropdown-nav-button"
                title={<span className="dropdown-nav-text">Occasions</span>}
              >
                <LinkContainer
                  to="/occasions/#wedding"
                  className="dropdown-nav-text"
                >
                  <NavDropdown.Item>Wedding</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer
                  to="/occasions/#babyshower"
                  className="dropdown-nav-text"
                >
                  <NavDropdown.Item>Baby Shower</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer
                  to="/occasions/#christmas"
                  className="dropdown-nav-text"
                >
                  <NavDropdown.Item>Christmas</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/order" className="nav-links">
                <Button variant="light">Place Order</Button>
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
          <Route path="/occasions" component={Occasions} />
          <Route path="/order" exact component={PlaceOrder} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
