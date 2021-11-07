/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from 'react';
import { getInfosMovie } from '../services/requestTmdb';
import { useState } from 'react/cjs/react.development';
import { Assistir, Featured, MInhaLista } from './FeaturedMovieStyles';
import Context from '../context/Context';

export default function FeaturedMovie({ item }) {

  // estado que armazana as informações do "featured movie"
  const [selected, setSelected] = useState(null);

  // url base do endereço das imagens
  const baseUrlImgList = 'https://image.tmdb.org/t/p/original';

  const context = useContext(Context);
  const { myList, setmyList } = context;

  // requisição das informações mais detalhadas do "featured movie"
  useEffect(() => {
    const getInfos = async () => {
      const infos = await getInfosMovie(item.id, 'tv');
      setSelected(infos);
    }
    getInfos();
  }, []);

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

  return (
    <Featured
      background={ item['backdrop_path'] }
      urlBase={ baseUrlImgList }
    >
    <div>
        <div>
          { console.log(selected) }
          <h1>{ selected && selected.original_name }</h1>
          <section>
            <p>{ selected && selected.vote_average } pontos</p>
            <span>{ selected && new Date(selected.first_air_date).getFullYear() }</span>
            <span>
              { selected && selected.number_of_seasons } temporada{ Number(selected && selected.number_of_seasons) > 1 && 's'}
            </span>
          </section>
          <p>{ selected && selected.overview }</p>
          <nav>
            <Assistir type="button">▶ Assistir</Assistir>
            <MInhaLista
              type="button"
              onClick={ () => adcMylist(selected) }
            >
              + Minha Lista
            </MInhaLista>
          </nav>
          <span><strong>Gênero:</strong></span>
        </div>
    </div>  
    </Featured>
  )
}
