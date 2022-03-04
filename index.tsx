import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Timer from './Timer';
import './style.css';

interface Track {
  id: number;
  remaining: number;
}

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return <Timer max={30} />;
  }
}

render(<App />, document.getElementById('root'));
