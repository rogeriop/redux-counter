import React, { Component } from 'react';
import Counter from './Counter'
import { createStore } from 'redux'
import counterReducer from './reducer';
import { Provider } from 'react-redux'

let store = createStore(counterReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
