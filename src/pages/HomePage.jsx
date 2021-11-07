// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import FeaturedMovie from '../components/FeaturedMovie';
import Header from '../components/Header';
import { getInfos } from '../services/requestTmdb';
import RenderList from '../components/RenderList';
import { Category, Home } from './HomePageStyles';
import Context from '../context/Context';

export default function HomePage() {

  const context = useContext(Context);

  // estado para gerencias as listas de filmes e suas categorias
  const [lists, setLists] = useState([]);

  // estado para armazenar a informação do filme aleatório
  // selecionado para ficar no componente "featured movie"
  const [featured, setFeatured] = useState(null);

  // estado para armazer a informação da cor do background do header
  const [black, setBlack] = useState(false);

  //Função que seleciona um filme aleaório para ficar no component "featured movie"
  const selectFeatured = (lists) => {
    const originals = lists.find((list) => list.category === 'originals');
    const selects = originals.items.results.filter((s) => s.overview.length > 1);
    const randomNumber = Math.floor(Math.random() * (selects.length - 1));
    const movieChosen = selects[randomNumber];
    setFeatured(movieChosen);
  }

  useEffect(() => {
    // função async que pega os dados de filmes e as listas da API
    const getLists = async () => {
      const list = await getInfos();
      setLists(list);
      selectFeatured(list);
    }
    getLists();
  }, []);

  useEffect(() => {
    // função que manipula o backgroung do header
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
        {/* renderiza lista de filmes que foram retirados da API */}
        { lists.map((list, i) => <RenderList key={ i } list={list} ItsMyList={ false }/>) }

        {/* renderiza "Minha lista" se existir */}
        { context.myList[0].items.results.length > 0
          && context.myList
          .map((list, i) => <RenderList key={ i } list={list} ItsMyList={ true } />) }
      </Category>
    </Home>
  )
}


