import React, { useEffect, useState } from 'react';
import FeaturedMovie from '../components/FeaturedMovie';
import { getInfos } from '../services/requestTmdb';
import { renderList } from './FunctionsHp';
import { Category, Home } from './styles';

export default function HomePage() {

  const [lists, setLists] = useState([]);
  const [featured, setFeatured] = useState(null);

  const selectFeatured = (lists) => {
    const originals = lists.find((list) => list.category === 'originals');
    const randomNumber = Math.floor(Math.random() * (originals.items.results.length - 1));
    const movieChosen = originals.items.results[randomNumber];
    setFeatured(movieChosen);
  }

  useEffect(() => {
    const getLists = async () => {
      const list = await getInfos();
      setLists(list);
      selectFeatured(list);
    }
    getLists();
  }, []);


  return (
    <Home>
      { featured && <FeaturedMovie item={ featured } />}
      <Category>
        { lists.map((list) => renderList(list)) }
      </Category>
    </Home>
  )
}


