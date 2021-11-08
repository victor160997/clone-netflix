/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import Context from "../context/Context";
import { MovieLeft, MovieRight } from "./RenderListStyles";

export const renderImage = (list, myList, setmyList, ItsMyList, history) => {
  // url base do endereço das imagens
  const baseUrlImgList = 'https://image.tmdb.org/t/p/w200';

  // função que adiciona um filme a "Minha Lista"
  const adcMylist = (movie) => {
    const alreadyExist = myList[0].items.results.some((mv) => mv.id === movie.id);
    if (alreadyExist === true) return undefined;
    setmyList([{
      category: 'mylist',
      title: 'Minha Lista',
      items: {
        results: [...myList[0].items.results, movie],
      }
    }]);
  }

  // função que adciona o filme como favorito e salva a informação no loca storage
  const adcFavorites = (e, movie) => {
    const favoriteFilms = JSON.parse(localStorage.getItem('favoriteFilms'));
    const alreadyExist = favoriteFilms.some((m) => m.id === movie.id);
    if (alreadyExist === false) {
      localStorage.setItem('favoriteFilms', JSON.stringify([...favoriteFilms, movie]));
      history.push('/movie-page');
    } else {
      const excluiFilm = favoriteFilms.filter((m) => m.id !== movie.id);
      localStorage.setItem('favoriteFilms', JSON.stringify([...excluiFilm]));
      history.push('/movie-page');
    }
  }

  // função que verifica no local storage se o filme está entre os favoritos
  const verifyFavorites = (movie) => {
    const favoriteFilms = JSON.parse(localStorage.getItem('favoriteFilms'));
    const alreadyExist = favoriteFilms.some((m) => m.id === movie.id);
    if (alreadyExist) {
      return '#46d369';
    } else {
    return '#fff';
    }
  }

  // função que renderiza as capas dos filmes
  return list.items.results.map((movie) => (
    <section key={ movie.id }>
      <img
        src={`${baseUrlImgList}${ movie['poster_path'] }`}
        alt={ movie['original_title'] }
      />
      {/* // esse ternário controla a exibição do botão "+"  que tem em cada card de filmes,
      ele é necessário pois não é exibido esse botão na categoria minha lista*/}
        { ItsMyList === false && <a href="#mylist"><svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="#fff" onClick={ () => adcMylist(movie) }>
          <path d="M0 0h24v24H0V0z" fill="none"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg></a> }
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill={ verifyFavorites(movie) } onClick={ (e) => adcFavorites(e, movie) }>
        <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"/>
      </svg>
    </section>
  ))
}

// função que lida com o botão esquerdo da barra de rolagem
const handleLeft = (moveX, setMoveX) => {
  let x = moveX + Math.round(window.innerWidth / 2);
  if(x > 0) {
    x = 0;
  }
  setMoveX(x);
}

// função que lida com o botão direito da barra de rolagem
const handleRight = (moveX, setMoveX, list) => {
  let x = moveX - Math.round(window.innerWidth / 2);
  let listWidth = list.items.results.length * 150;
  if (window.innerWidth - listWidth > x) {
    x = (window.innerWidth - listWidth) - 90
  }
  setMoveX(x);
}

export default function RenderList({ list, ItsMyList, history }) {

  const context = useContext(Context);
  const { myList, setmyList } = context;

  // estado que gerencia informação das barras de rolagem
  const [ moveX, setMoveX] = useState(0);

  return (
    <div key={ list.category } id={ list.category}>
      <h2>{ list.title }</h2>
      <MovieRight onClick={ () => handleRight(moveX, setMoveX, list) }>
        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="50px" viewBox="0 0 24 24" width="50px" fill="#fff"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg>
      </MovieRight>
      <MovieLeft onClick={ () => handleLeft(moveX, setMoveX) }>
        <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/></svg>
      </MovieLeft>
      <div>
        <div style={{ marginLeft: moveX }}>
          { list.items.results && renderImage(list, myList, setmyList, ItsMyList, history) }
        </div>
      </div>
    </div>
  );
}
