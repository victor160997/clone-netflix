import React from 'react';
import Provider from './context/Provider'
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/homepage" component={ HomePage } />
        <Route path="/" component={ Login } />
      </Switch>
    </Provider>
  );
}

export default App;
