import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/movie-page" component={ HomePage } />
        <Route exact path="/" component={ Login } />
      </Switch>
    </Provider>
  );
}

export default App;
