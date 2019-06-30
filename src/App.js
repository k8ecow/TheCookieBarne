import React from 'react'
import { Route, NavLink, HashRouter } from 'react-router-dom'

import logo from './assets/cookiebarne-logo.png'
import pineapple from './assets/pineapple.jpg'
import birthday from './assets/birthday.jpg'
import chick from './assets/chick.jpg'
import './App.css'
import Home from './Home.js'
import About from './About.js'
import Contact from './Contact.js'
import Gallery from './Gallery.js'

function App () {
  return (
    <div className='App'>
      <HashRouter>
        <div className='title-nav'>
          <NavLink to='/'>
            <img src={logo} alt={'test'} className='cookiebarne-logo' />
          </NavLink>
        </div>
        <h1 className='headerImg'>
          <div className='wrapper' />
        </h1>
        <ul className='homepage-three-boxes-wrap clearfix'>
          <li className='box first'>
            <NavLink to='/about'>
              <img src={pineapple} alt={'About Us'} class='navTile' />
            </NavLink>
          </li>
          <li className='box first'>
            <NavLink to='/gallery'>
              <img src={chick} alt={'Gallery'} class='navTile' />
            </NavLink>
          </li>
          <li className='box first'>
            <NavLink to='/contact'>
              <img src={birthday} alt={'Place an Order'} class='navTile' />
            </NavLink>
          </li>
        </ul>

        <div className='content'>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/contact' component={Contact} />
        </div>
      </HashRouter>
    </div>
  )
}

export default App
