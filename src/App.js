import React, { useEffect } from 'react';
import './App.css';
import Provider from './context/Provider';
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
    <Provider>
      <div className="App">
        Hellowwwww
      </div>
    </Provider>
  );
}

export default App;
