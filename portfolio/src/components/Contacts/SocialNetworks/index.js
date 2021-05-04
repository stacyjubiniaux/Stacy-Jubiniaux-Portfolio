import React from 'react';

// == Import : local
import './style.scss';
import gmail from '../../../assets/images/gmail.png';
import linkedin from '../../../assets/images/linkedin.png';

const Networks = () => (
    <div className="networks">
      <p className="networks-content">Me contacter via les réseaux</p>
      <a href="https://www.linkedin.com/in/stacyjubiniaux/"><img className="networks-linkedin" src={linkedin} alt="Logo Linkedin" /></a>
      <a href="mailto:stacyjubiniaux.pro@gmail.com"><img className="networks-gmail" src={gmail} alt="Logo Gmail" /></a>
    </div>
  );

export default Networks;