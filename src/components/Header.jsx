/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderPage } from '../pages/styles';
import imageNetflix from './imageNetflix.png'

export default function Header({ background }) {
  return (
    <HeaderPage background={ background }>
      <nav>
        <img src={ imageNetflix } alt="logo netflix"/>
        <Link to="/homepage">
          <p>Inicio</p>
        </Link>
        <a href="#originals">
          <p>Séries</p>
        </a>
        <p>Minha lista</p>
        <a href="#toprated">
          <p>Em alta</p>
        </a>
      </nav>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 0 24 24" width="35px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        <img src="https://occ-0-6172-1567.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXYGYCun9Sa2P1_GTaVtADVKfP2uC9e206A3KM1eABgccajzvO4PAR5XMPRiqqrY7SvvY_lneVww04vkQaDMuQ6I-wzm.png?r=c71" alt="logo netflix"/>
      </div>
    </HeaderPage>
  )
}
