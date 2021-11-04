import React, { useEffect, useState } from 'react';
import { getInfos } from '../services/requestTmdb';
import { renderList } from './FunctionsHp';

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
      <section>
        { lists.map((list) => renderList(list)) }
      </section>
    </div>
  )
}
