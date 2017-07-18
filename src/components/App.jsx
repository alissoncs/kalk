import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import usersReducer from '../reducers/usersReducer';
import UsersContainer from './UsersContainer.jsx';

const store = createStore(combineReducers({
  usersReducer,
}));

export default class App extends Component {

  componentWillMount() {
    this.sd = {
    };
  }

  render() {
    this.sd = {};

    return <Provider store={store}>
      <UsersContainer />
    </Provider>;
  }

}
