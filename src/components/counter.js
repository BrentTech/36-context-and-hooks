import React from 'react';
import {CounterContext} from '../settings/context.js';

export default (props) => {
  return (
    <CounterContext.Consumer>
      {
        (context) => {
          return(
            <div>
              <h1>{context.count}</h1>
            </div>
          )
        }
      }
    </CounterContext.Consumer>
  )
}