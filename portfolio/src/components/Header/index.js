import React from 'react';

// == Import : local
import logo from '../../assets/images/logo.png';
import background from '../../assets/images/background3.png';
import './style.scss';

const Header = () => (
    <div className="header">
      <img className="header-background" src={background} alt="Image de fond" />
      <nav className="header-nav">
        <div className="header-content">
          <img src={logo} alt='Logo' className='header-logo' />
        </div>
        <section className='header-list'>
          <a className="header-link" href="#aboutme">
            <span className="text">About me</span>
            <span className="line -right"></span>
            <span className="line -top"></span>
            <span className="line -left"></span>
            <span className="line -bottom"></span>
          </a>
          <a className="header-link" href="#projets">
            <span className="text">Projets</span>
            <span className="line -right"></span>
            <span className="line -top"></span>
            <span className="line -left"></span>
            <span className="line -bottom"></span>
          </a>
          <a className="header-link" href="#contacts">
            <span className="text">Contacts</span>
            <span className="line -right"></span>
            <span className="line -top"></span>
            <span className="line -left"></span>
            <span className="line -bottom"></span>
          </a>
        </section>
      </nav>
    </div>
  );

export default Header;