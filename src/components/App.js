import React from 'react';
import logo from '../assets/images/nav_logoman.svg';
import '../styles/App.css';
import { TopNavBar } from './TopNavBar.js';
import { Main } from './Main';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <Main />
    </div>
  );
}

export default App;
