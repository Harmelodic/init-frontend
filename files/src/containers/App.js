import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Index from './Index';

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    );
  }
}
