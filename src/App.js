import React from 'react';
import User from './components/user';

import PComponent from './components/pure';
import NpComponent from './components/npure';
import Arr from './components/arr';

class App extends React.Component {

  state = {
    b: 1
  };

  render() {
    return (
      <React.Fragment>
        {/* Hello world
        <User fullName="Name Name" age={6*7} />
        <User fullName="Name Name" age={6*7} />
        <button onClick={() => this.setState({b: 8})}>Click</button>
        <PComponent n={this.state.b} />
        <NpComponent n={this.state.b} /> */}
        <Arr />
      </React.Fragment>
    );
  }
}

export default App;
