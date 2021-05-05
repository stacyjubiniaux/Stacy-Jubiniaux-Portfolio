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
      <a href="https://developer.mozilla.org/fr/docs/Web/Guide/HTML/HTML5"><img className="technologies-img" src={html5} alt="logo html 5"/></a>
      <a href="https://developer.mozilla.org/fr/docs/Web/CSS"><img className="technologies-img" src={css3} alt="logo css3" /></a>
      <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript"><img className="technologies-img" src={javascript} alt="logo javascript" /></a>
      <a href="https://fr.reactjs.org/"><img className="technologies-img" src={react} alt="logo react" /></a>
      <a href="https://sass-lang.com/"><img className="technologies-img" src={sass} alt="logo sass" /></a>
      <a href="https://getbootstrap.com/"><img className="technologies-img" src={bootstrap} alt="logo bootstrap" /></a>
      <a href="https://wordpress.org/"><img className="technologies-img" src={wordpress} alt="logo wordpress" /></a>
      <a href="https://www.php.net/manual/fr/intro-whatis.php"><img className="technologies-img" src={php} alt="logo php" /></a>
      <a href="https://www.mysql.com/fr/"><img className="technologies-img" src={mysql} alt="logo mysql" /></a>
      <a href="https://github.com/stacyjubiniaux"><img className="technologies-img" src={git} alt="logo git" /></a>
    </div>
  );

export default Technologies;