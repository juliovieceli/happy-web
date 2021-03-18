import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../images/logo.svg';

import './styles.css';

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>

          <div className="location">
            <strong>Ribeirão Preto</strong>
            <span>São Paulo</span>
          </div>

          <Link to="/app" className="enter-app">
            <FiArrowRight size={24} color="rgba(0,0,0,0.6)" />
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Landing;
