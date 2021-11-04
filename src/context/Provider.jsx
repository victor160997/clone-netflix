import React from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  return (
    <div>
      <Context.Provider value={ 'vazio' }>
        { children }
      </Context.Provider>
    </div>
  )
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.object).isRequired,
};
