import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import changeTextReducer from '../reducers';
import MainAppScreen from './mainAppScreen';

const store = createStore(changeTextReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainAppScreen />
      </Provider>
    );
  }
}

export default App;
