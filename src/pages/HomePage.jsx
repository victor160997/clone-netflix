import React, { useEffect, useState } from 'react';
import FeaturedMovie from '../components/FeaturedMovie';
import Header from '../components/Header';
import { getInfos } from '../services/requestTmdb';
import { renderList } from './FunctionsHp';
import { Category, Home } from './styles';

export default function HomePage() {

  const [lists, setLists] = useState([]);
  const [featured, setFeatured] = useState(null);
  const [black, setBlack] = useState(false);

  const selectFeatured = (lists) => {
    const originals = lists.find((list) => list.category === 'originals');
    const selects = originals.items.results.filter((s) => s.overview.length > 1);
    const randomNumber = Math.floor(Math.random() * (selects.length - 1));
    const movieChosen = selects[randomNumber];
    console.log(selects);
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

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlack(true);
      } else {
        setBlack(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <Home>
      <Header background={ black } />
      { featured && <FeaturedMovie item={ featured } />}
      <Category>
        { lists.map((list) => renderList(list)) }
      </Category>
    </Home>
  )
}


