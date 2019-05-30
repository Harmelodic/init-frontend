import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Index from './Index';

/**
 * App
 */
export default class App extends React.Component {
  /**
   * @return {HTMLElement} App
   */
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    );
  }
}
