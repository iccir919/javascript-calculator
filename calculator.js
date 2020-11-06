'use strict';

function Display(props) {
  return (
    <div id="display">
      <h3>{props.display}</h3>
    </div>
  );
}

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div onClick={this.props.handleButtonPress} className="buttons">
            <button id="clear">AC</button>
            <button id="divide">/</button>
            <button id="multiply">*</button>
            <button id="seven">7</button>
            <button id="eight">8</button>
            <button id="nine">9</button>
            <button id="subtract">-</button>
            <button id="four">4</button>
            <button id="five">5</button>
            <button id="six">6</button>
            <button id="add">+</button>
            <button id="one">1</button>
            <button id="two">2</button>
            <button id="three">3</button>
            <button id="equals">=</button>
            <button id="zero">0</button>
            <button id="decimal">.</button>
      </div>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0"
    }

    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleButtonPress(e) {
    const buttonPressed = e.target.innerHTML;
    console.log(buttonPressed)
    
    if (Number.isNaN( Number(buttonPressed) )) {
      if (buttonPressed === "AC") {
        this.setState({
          display: "0"
        });
      } else if (buttonPressed === ".") { 
        if (this.state.display[this.state.display.length - 1] === ".") return;
        this.setState((state) => ({
          display: state.display + buttonPressed
        }));
      } else if (buttonPressed === "=") {
        const result = eval(this.state.display);

        this.setState({
          display: result
        })
      } else {
        this.setState((state) => ({
          display: state.display + buttonPressed
        }));
      }
    } else {
      if (this.state.display === "0") {
        this.setState({
          display: "" + buttonPressed
        })
      } else {
        this.setState((state) => ({
          display: state.display + buttonPressed
        }));
      }
    }
  }

  render() {
    return (
      <div className="calculator">
        <Display display={this.state.display} />
        <Buttons handleButtonPress={this.handleButtonPress} />
      </div>
    )
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);

