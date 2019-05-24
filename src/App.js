import React from 'react';
import NavBar from './NavBar.js';
import InstaGrid from './InstaGrid.js';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="Instafeed"  >
        <InstaGrid account="the_cookie_barne" numberOfMediaElements={9}/>
      </div>
    </div>
  );
}

export default App;
