import React from 'react';
import Counter from './counter.js'
import CounterContext from '../settings/context.js';
import Incrementer from './incrementer.js';
import Decrementer from './decrementer.js';

class App extends React.Component {

  render() {
    return (
      <CounterContext>
        <Counter />
        <Incrementer />
        <Decrementer />
      </CounterContext>
    );
  }
}

export default App;
