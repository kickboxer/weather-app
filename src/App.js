import React, { Component } from 'react';
import FrontSide from './FrontSide';
import BackSide from './BackSide';
import './panel.css';

class App extends Component {
  render() {
    return (
      <div className="panel">
        <div className="panel-front">
          <FrontSide />
        </div>
        <div className="panel-back">
          <BackSide />
        </div>
      </div>
    );
  }
}

export default App;
