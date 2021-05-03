// == Import : npm
import React from 'react';

// == Import : local
import Header from '../Header';
import AboutMe from '../AboutMe';
import Projects from '../Projects';
// == Import : style
import './style.scss';

const App = () => (
  <div className="app">
    <Header />
    <AboutMe />
    <Projects />
  </div>
);

export default App;