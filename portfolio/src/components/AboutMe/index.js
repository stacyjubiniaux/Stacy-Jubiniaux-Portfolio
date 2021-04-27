import React from 'react';

// == Import : local
import './style.scss';
import avatar from '../../assets/images/avatar2.png';

const AboutMe = () => (
    <div className="about">
      <h1 className="about-title">About me</h1>
      <img src={avatar} alt='Avatar de Stacy' className="about-avatar"/>
      <p className="about-content">Hi ! Je me prénomme Stacy Jubiniaux et voici mon site web !</p>
      <p className="about-content"> Bientôt diplômée du Titre Professionnel de développeur Web et Web mobile, j'ai eu l'occasion de suivre une formation de développeur web fullstack et de me spécialiser en React. Je possède une forte appétence pour le front.</p>
      <p className="about-content">Vous trouverez sur mon site les projets que j'ai réalisés. Bon visionnage !</p>
    </div>
  );

export default AboutMe;