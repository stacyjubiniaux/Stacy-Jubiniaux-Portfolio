import React from 'react';

// == Import : local
import logo from '../../assets/images/logo.png';
import './style.scss';

const Header = () => (
    <div className="header">
      <div>
        <img src={logo} alt='Logo' className='header-logo' />
      </div>
      <section className='header-list'>
        <a>
          <span className="text">About me</span>
          <span className="line -right"></span>
          <span className="line -top"></span>
          <span className="line -left"></span>
          <span className="line -bottom"></span>
        </a>
        <a>
          <span className="text">Projects</span>
          <span className="line -right"></span>
          <span className="line -top"></span>
          <span className="line -left"></span>
          <span className="line -bottom"></span>
        </a>
        <a>
          <span className="text">Contacts</span>
          <span className="line -right"></span>
          <span className="line -top"></span>
          <span className="line -left"></span>
          <span className="line -bottom"></span>
        </a>
      </section>
    </div>
  );

export default Header;