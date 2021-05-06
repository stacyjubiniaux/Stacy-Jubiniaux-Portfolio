import React from 'react';

// == Import : local
import './style.scss';
import mapquiz from '../../assets/images/mapquiz.PNG';
import cadreho from '../../assets/images/cadreho.PNG';

const Projects = () => (
    <div className="projects" id="projets">
      <h1 className="projects-title">Projets</h1>
      <div className="projects-content">
        <div className="projects-item">
          <img className="projects-img" src={mapquiz} alt="Vignette du site Mapquiz" />
          <h1 className="projects-project">Mapquiz</h1>
          <p className="projects-description">MapQuiz est une application web destinée aux jeunes enfants, qui a pour but de proposer des questionnaires sur le thème du monde et du système solaire. <br />
          Ce projet a été conçu par une équipe de 4 développeurs en 1 mois.</p>
          <a className="projects-link" href="https://mapquizfront.herokuapp.com/"><input className="projects-button" type="button" value="Visiter"/></a>
        </div>
        <div className="projects-item">
          <img className="projects-img" src={cadreho} alt="Vignette du site Mapquiz" />
          <h1 className="projects-project">Cadreho</h1>
          <p className="projects-description">Intégration réalisée pour une société de portage salarial.</p>
          <a className="projects-link" href="https://stacyjubiniaux.github.io/integration-cadreho/html/index.html"><input className="projects-button" type="button" value="Visiter"/></a>
        </div>
      </div>
    </div>
  );

export default Projects;