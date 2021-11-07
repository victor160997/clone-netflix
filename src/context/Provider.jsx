import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {

  const [myList, setmyList] = useState([{
    category: 'mylist',
    title: 'Minha Lista',
    items: {
      results: [],
    }
  }]);

  const globalState = {
    myList,
    setmyList
  }

  return (
    <div>
      <Context.Provider value={ globalState }>
        { children }
      </Context.Provider>
    </div>
  )
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.object).isRequired,
  /* children: PropTypes.string.isRequired, */
};
