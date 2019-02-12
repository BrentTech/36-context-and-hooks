import React from 'react';
import {CounterContext} from '../settings/context.js';

export default (props) => {
  return (
    <CounterContext.Consumer>
      {
        (context) => {
          return(
            <div>
            <button onClick={() => context.increment(context.count + 1)}>+</button>
            </div>
          )
        }
      }
    </CounterContext.Consumer>
  )
}