import React from 'react';
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: 0
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <div id="display">
            {this.state.displayValue}
          </div>
          <div>
            <button id="clear">AC</button>
            <button id="divide">/</button>
            <button id="multiply">x</button>
          </div>
          <div>
            <button id="seven">7</button>
            <button id="eight">8</button>
            <button id="nine">9</button>
            <button id="subtract">-</button>
          </div>
          <div>
            <button id="four">4</button>
            <button id="five">5</button>
            <button id="six">6</button>
            <button id="add">+</button>
          </div>
          <div>
            <button id="one">1</button>
            <button id="two">2</button>
            <button id="three">3</button>
            <button id="equals">=</button>
          </div>
          <div>
            <button id="zero">0</button>
            <button id="decimal">.</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
