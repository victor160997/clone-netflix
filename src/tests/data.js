export const items = {
  items: {
    results: [{
        poster_path: 'key-da-image1',
        original_title: 'image1',
        id: 1,
      },
      {
        poster_path: 'key-da-image2',
        original_title: 'image2',
        id: 2,
      }
    ],
  }
}

export const list = [
  {
    category: 'originals',
    title: 'Originais da Netflix',
    items: items
  },
  {
    category: 'trending',
    title: 'Recomendados',
    items: items
  },
  {
    category: 'toprated',
    title: 'Em alta',
    items: items
  },
  {
    category: 'action',
    title: 'Ação',
    items: items
  },
  {
    category: 'comedy',
    title: 'Comédia',
    items: items
  },
  {
    category: 'horror',
    title: 'Terror',
    items: items
  },
  {
    category: 'romance',
    title: 'Romance',
    items: items
  },
  {
    category: 'documentary',
    title: 'Documentários',
    items: items
  }
];