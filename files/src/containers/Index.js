import React from 'react';
import Middleware from '../redux/Middleware';
import {Store} from '../redux/Store';
import Title from '../components/Title';

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: Store.getState().title,
    };
  }

  componentDidMount() {
    this.unsubscribe = Store.subscribe(() => {
      this.setState({
        title: Store.getState().title,
      });
    });

    Store.dispatch(Middleware.fetchTitle());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <Title title={this.state.title}/>
      </div>
    );
  }
}
