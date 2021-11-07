/* eslint-disable react/prop-types */
import React, { useState }/* , { useState } */ from "react";
import { MovieLeft, MovieRight } from "./styles";

export const renderImage = (list) => {
  const baseUrlImgList = 'https://image.tmdb.org/t/p/w200';

  return list.items.results.map((movie) => (
    <section key={ movie.id }>
      <img
        src={`${baseUrlImgList}${ movie['poster_path'] }`}
        alt={ movie['original_title'] }
      />
    <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="#fff">
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff">
      <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"/>
    </svg>
    </section>
  ))
}

const handleLeft = (moveX, setMoveX) => {
  let x = moveX + Math.round(window.innerWidth / 2);
  if(x > 0) {
    x = 0;
  }
  setMoveX(x);
}

const handleRight = (moveX, setMoveX, list) => {
  let x = moveX - Math.round(window.innerWidth / 2);
  let listWidth = list.items.results.length * 150;
  console.log(window.innerWidth);
  if (window.innerWidth - listWidth > x) {
    x = (window.innerWidth - listWidth) - 90
  }
  setMoveX(x);
}

export default function RenderList({ list }) {

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
          { list.items.results && renderImage(list) }
        </div>
      </div>
    </div>
  );
}
