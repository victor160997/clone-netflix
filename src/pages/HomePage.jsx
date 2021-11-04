import React, { useEffect, useState } from 'react';
import { getInfos } from '../services/requestTmdb';
import { renderList } from './FunctionsHp';
import { Category } from './styles';

export default function HomePage() {

  const [lists, setLists] = useState([])

  useEffect(() => {
    const getLists = async () => {
      const list = await getInfos();
      setLists(list);
    }

    getLists();
  }, []);


  return (
    <div>
      <Category>
        { lists.map((list) => renderList(list)) }
      </Category>
    </div>
  )
}
