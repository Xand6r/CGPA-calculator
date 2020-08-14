import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { component as SignUpPage } from './components/register';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={SignUpPage} />
    </Switch>
  );
}

export default App;
