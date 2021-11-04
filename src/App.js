import React, { useEffect } from 'react';
import './App.css';
import { getInfos } from './services/requestTmdb';

function App() {

  useEffect(() => {
    const getLists = async () => {
      const list = await getInfos();
      console.log(list);
    }

    getLists();
  }, []);

  return (
    <div className="App">
      Hellowwwww
    </div>
  );
}

export default App;
