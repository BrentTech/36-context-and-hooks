import React from 'react';
import {CounterContext} from '../settings/context.js';

export default (props) => {
  return (
    <CounterContext.Consumer>
      {
        (context) => {  
          return(
            <div>
              <button onClick={() => context.decrement(context.count - 1)}>-</button>
            </div>
          )
        }
      }
    </CounterContext.Consumer>
  )
}