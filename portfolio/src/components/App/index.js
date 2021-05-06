// == Import : npm
import React from 'react';

// == Import : local
import Header from '../Header';
import AboutMe from '../AboutMe';
import Projects from '../Projects';
import Contacts from '../Contacts';
// == Import : style
import './style.scss';
import Footer from '../Footer';

const App = () => (
  <div className="app">
    <Header />
    <AboutMe />
    <Projects />
    <Contacts />
    <Footer />
  </div>
);

export default App;