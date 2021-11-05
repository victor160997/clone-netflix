/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { getInfosMovie } from '../services/requestTmdb';
import { useState } from 'react/cjs/react.development';
import { Assistir, Featured, MInhaLista } from '../pages/styles';

export default function FeaturedMovie({ item }) {

  const [selected, setSelected] = useState(null);
  const baseUrlImgList = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    const getInfos = async () => {
      const infos = await getInfosMovie(item.id, 'tv');
      setSelected(infos);
    }
    getInfos();
  }, [])

  return (
    <Featured
      background={ item['backdrop_path'] }
      urlBase={ baseUrlImgList }
    >
    <div>
        <div>
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
            <MInhaLista type="button">+ Minha Lista</MInhaLista>
          </nav>
          <span><strong>Gênero:</strong></span>
        </div>
    </div>  
    </Featured>
  )
}
