import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About.js';
import Home from './components/Home.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import BabyAndKid from './components/Gallery/BabyAndKid.js';
import Birthday from './components/Gallery/Birthday.js';
import Christmas from './components/Gallery/Christmas.js';
// import Corporate from './components/Gallery/Corporate.js';
// import ForFun from './components/Gallery/ForFun.js';
// import Halloween from './components/Gallery/Halloween.js';
import School from './components/Gallery/School.js';
import Sports from './components/Gallery/Sports.js';
// import Thanksgiving from './components/Gallery/Thanksgiving';
import Weddings from './components/Gallery/Weddings.js';
import PlaceOrder from './components/PlaceOrder.js';
import Privacy from './components/Privacy.js';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router history={About}>
        <Navbar bg="light" collapseOnSelect expand="lg" role="navigation">
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
                  to="/gallery/babyandkid"
                  className="dropdown-nav-text"
                >
                  <NavDropdown.Item>Baby And Kid</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer
                  to="/gallery/birthday"
                  className="dropdown-nav-text"
                >
                  <NavDropdown.Item>Birthday</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer
                  to="/gallery/christmas"
                  className="dropdown-nav-text"
                >
                  <NavDropdown.Item>Christmas</NavDropdown.Item>
                </LinkContainer>
                {/*
                <LinkContainer
                  to="/gallery/corporate"
                  className="dropdown-nav-text"
                >
                  <NavDropdown.Item>Corporate</NavDropdown.Item>
                </LinkContainer> */}
                {/*
                <LinkContainer
                  to="/gallery/forfun"
                  className="dropdown-nav-text"
                >
                  <NavDropdown.Item>For Fun</NavDropdown.Item>
                </LinkContainer> */}
                {/*
                <LinkContainer
                  to="/gallery/halloween"
                  className="dropdown-nav-text"
                >
                  <NavDropdown.Item>Halloween</NavDropdown.Item>
                </LinkContainer> */}

                <LinkContainer
                  to="/gallery/school"
                  className="dropdown-nav-text"
                >
                  <NavDropdown.Item>School</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer
                  to="/gallery/sports"
                  className="dropdown-nav-text"
                >
                  <NavDropdown.Item>Sports</NavDropdown.Item>
                </LinkContainer>
                {/*
                <LinkContainer
                  to="/gallery/thanksgiving"
                  className="dropdown-nav-text"
                >
                  <NavDropdown.Item>Thanksgiving</NavDropdown.Item>
                </LinkContainer> */}

                <LinkContainer
                  to="/gallery/weddings"
                  className="dropdown-nav-text"
                >
                  <NavDropdown.Item>Weddings</NavDropdown.Item>
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
        <div className="headerImg" role="banner">
          <div className="wrapper" />
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/gallery/babyandkid" component={BabyAndKid} />
          <Route path="/gallery/birthday" component={Birthday} />
          <Route path="/gallery/christmas" component={Christmas} />
          {/*<Route path="/gallery/corporate" component={Corporate} /> */}
          {/*<Route path="/gallery/forfun" component={ForFun} /> */}
          {/*<Route path="/gallery/halloween" component={Halloween} /> */}
          <Route path="/gallery/school" component={School} />
          <Route path="/gallery/sports" component={Sports} />
          {/*<Route path="/gallery/thanksgiving" component={Thanksgiving} /> */}
          <Route path="/gallery/weddings" component={Weddings} />
          <Route path="/order" exact component={PlaceOrder} />
          <Route path="/privacy" component={Privacy} />
        </Switch>
        <div class="footer">
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </Router>
    </div>
  );
}

export default App;
