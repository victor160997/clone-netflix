const urlBase = 'https://api.themoviedb.org/3';
const languageAndKey = '&api_key=e70501c774a05cf85580e32a27897dc6&language=pt-BR';

async function fetchDataBase(endpoint) {
  try {
    const response = await fetch(`${urlBase}${endpoint}${languageAndKey}`);
    const json = await response.json();
    return json;
  } catch {
    console.log('Erro')
  }
}

export const getInfos = async () => {
  return [
    {
      category: 'originals',
      title: 'Originais da Netflix',
      items: await fetchDataBase('/discover/tv?with_network=213')
    },
    {
      category: 'trending',
      title: 'Recomendados',
      items: await fetchDataBase('/trending/all/week?')
    },
    {
      category: 'toprated',
      title: 'Em alta',
      items: await fetchDataBase('/movie/top_rated?')
    },
    {
      category: 'action',
      title: 'Ação',
      items: await fetchDataBase('/discover/movie?with_genres=28')
    },
    {
      category: 'comedy',
      title: 'Comédia',
      items: await fetchDataBase('/discover/movie?with_genres=35')
    },
    {
      category: 'horror',
      title: 'Terror',
      items: await fetchDataBase('/discover/movie?with_genres=27')
    },
    {
      category: 'romance',
      title: 'Romance',
      items: await fetchDataBase('/discover/movie?with_genres=10749')
    },
    {
      category: 'documentary',
      title: 'Documentários',
      items: await fetchDataBase('/discover/movie?with_genres=99')
    }
  ];
}

export const getInfosMovie = async (movieId) => {
  const info = await fetchDataBase(`/tv/${movieId}?`);
  return info;
}