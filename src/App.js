import React from 'react';
import InstaGrid from './InstaGrid.js';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Instafeed" >
        <InstaGrid account="the_cookie_barne" numberOfMediaElements={9}/>
      </div>
    </div>
  );
}

export default App;
