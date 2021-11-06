import React from "react";
import { MovieLeft, MovieRight } from "./styles";

export const renderImage = (list) => {
  const baseUrlImgList = 'https://image.tmdb.org/t/p/w200';
  return list.items.results.map((movie) => (
    <img
      src={`${baseUrlImgList}${ movie['poster_path'] }`}
      alt={ movie['original_title'] }
      key={ movie.id }
    />
  ))
}

export function renderList(list) {
  return (
    <div key={ list.category }>
      <h2>{ list.title }</h2>
      <MovieRight>
        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="50px" viewBox="0 0 24 24" width="50px" fill="#fff"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg>
      </MovieRight>
      <MovieLeft>
        <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/></svg>
      </MovieLeft>
      <div>
        <div>
          { list.items.results && renderImage(list) }
        </div>
      </div>
    </div>
  );
}
