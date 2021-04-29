import React from 'react';

// == Import : local
import './style.scss';
import html5 from '../../../assets/images/html5.png';
import css3 from '../../../assets/images/css3.png';
import javascript from '../../../assets/images/javascript.png';
import react from '../../../assets/images/react.png';
import sass from '../../../assets/images/sass.png';
import bootstrap from '../../../assets/images/bootstrap.png';
import php from '../../../assets/images/php.png';
import mysql from '../../../assets/images/mysql.png';
import wordpress from '../../../assets/images/wordpress.png';
import git from '../../../assets/images/git.png';

const Technologies = () => (
    <div className="technologies">
      <img className="technologies-img" src={html5} alt="logo html 5"/>
      <img className="technologies-img" src={css3} alt="logo css3" />
      <img className="technologies-img" src={javascript} alt="logo javascript" />
      <img className="technologies-img" src={react} alt="logo react" />
      <img className="technologies-img" src={sass} alt="logo sass" />
      <img className="technologies-img" src={bootstrap} alt="logo bootstrap" />
      <img className="technologies-img" src={wordpress} alt="logo wordpress" />
      <img className="technologies-img" src={php} alt="logo php" />
      <img className="technologies-img" src={mysql} alt="logo mysql" />
      <img className="technologies-img" src={git} alt="logo git" />
    </div>
  );

export default Technologies;