import React from 'react';

export const CounterContext = React.createContext();

class SettingsProvider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      increment: this.increment,
      decrement: this.decrement,

    }
  };

  increment = (count) => {
    this.setState({count});
  };

  decrement = (count) => {
    this.setState({count});
  };

  render() {
    return(
      <CounterContext.Provider value={this.state}>
      {this.props.children}
      </CounterContext.Provider>
    )
  };
}

export default SettingsProvider;