/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import Context from '../context/Context';
import { HeaderPage } from './HeaderStyles';
import imageNetflix from './imageNetflix.png'
import RenderFilter from './RenderFilter';

export default function Header({ background, lists }) {
  
  const { searching, setSearching } = useContext(Context);

  const [filtereds, setFiltereds] = useState([]);
  const [searchValue, setSearchValue] = useState({
    inputSearch: '',
  });

  const handleClick = () => {
    setSearching(!searching);
  }

  const findMovie = () => {
    let filter = [];
    lists.map((list) => {
      list.items.results.map((movie) => {
        const movieName = movie.original_title;
        const searchWord = searchValue.inputSearch.toLowerCase();
        if(movieName) {
          return movieName.toLowerCase().includes(searchWord) && filter.push(movie);
        }
        return undefined;
      })
    });
    setFiltereds(filter);
  }
  
  useEffect(() => {
    findMovie();
  }, [searchValue])

  const handleSearch = ({ target }) => {
    setSearchValue({ [target.name]: target.value });
  }

  return (
    <HeaderPage background={ background } searching={ searching }>
      <nav>
        <img src={ imageNetflix } alt="logo netflix"/>
        <Link to="/movie-page">
          <p>Inicio</p>
        </Link>
        <a href="#originals">
          <p>Séries</p>
        </a>
        <a href="#mylist">
        <p>Minha lista</p>
        </a>
        <a href="#toprated">
          <p>Em alta</p>
        </a>
      </nav>
      <div>
        { searching
          && <input
          type="text"
          name='inputSearch'
          value={ searchValue.inputSearch }
          onChange={ (e) => handleSearch(e) }
          /> 
        }
        <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 0 24 24" width="35px" fill="#fff" onClick={ () => handleClick()}>
          <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
        <img src="https://occ-0-6172-1567.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXYGYCun9Sa2P1_GTaVtADVKfP2uC9e206A3KM1eABgccajzvO4PAR5XMPRiqqrY7SvvY_lneVww04vkQaDMuQ6I-wzm.png?r=c71" alt="logo netflix"/>
        { filtereds.length > 0 && searching && <RenderFilter list={ filtereds } />}
      </div>
    </HeaderPage>
  )
}
