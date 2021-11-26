import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { counter: 0 }
  handleTextarea = (event) => {
    this.setState({counter : event.target.value.length})
  }
  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.handleTextarea}></textarea>
        <div className="counter">{this.state.counter}</div>
      </div>
    );
  }
}

export default App;
