import React from 'react';
// import Actions from '../redux/Actions';
// import Middleware from '../redux/Middleware';
import {Store} from '../redux/Store';
import Title from '../components/Title';

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Insert state
    };

    // Insert method bindings
  }

  // Insert methods

  componentDidMount() {
    this.unsubscribe = Store.subscribe(() => {
      this.setState({
        // Insert Store update calls to state
      });
    });

    // Insert Middleware calls
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  
  render() {
    return (
      <div>
        <Title />
      </div>
    );
  }
}
