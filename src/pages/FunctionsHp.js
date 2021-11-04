import React from "react";

function renderImage(list) {
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
      { list.items.results && renderImage(list) }
    </div>
  );
}