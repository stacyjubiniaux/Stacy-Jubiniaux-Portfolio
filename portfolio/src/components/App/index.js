// == Import : npm
import React from 'react';

// == Import : local
import Header from '../Header';
import AboutMe from '../AboutMe';
// == Import : style
import './style.scss';

const App = () => (
  <div className="app">
    <Header />
    <AboutMe />
  </div>
);

export default App;