'use strict';

function Display(props) {
  const output = props.display.length > 7 ? "NUM LIMIT" : props.display
  return (
    <div id="display">
      <h3>{output}</h3>
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

    /* Handle all non-number inputs */
    if (Number.isNaN( Number(buttonPressed) )) {
      if (buttonPressed === "AC") {
        this.setState({
          display: "0"
        });
      /* Handle decimal points input */
      } else if (buttonPressed === ".") { 
        /* Look for the last operator to find index of last numeric characater */
        const operatorMatches = Array.from(this.state.display.matchAll(/[-\+\*\\]/g));
        if (operatorMatches[0]) {
          const lastOperatorMatch = operatorMatches[operatorMatches.length - 1];
          const currentNumberInput = this.state.display.slice(lastOperatorMatch.index + 1);

          if(currentNumberInput.indexOf(".") >= 0) {
            return;
          } else {
            this.setState((state) => ({
              display: state.display + buttonPressed
            })); 
          }
        /* 
          In the case there is previous input history, check the current input 
          for duplicate decimal points 
        */
        } else {
          if (this.state.display.indexOf(".") >= 0) return;

          this.setState((state) => ({
            display: state.display + buttonPressed
          })); 
        }
      /* Handle equal sign input */
      } else if (buttonPressed === "=") {
        const consecutiveOperatorInput = this.state.display.match(/\d[-\+\*\\]+$/);
        if(consecutiveOperatorInput) {
          this.setState((state) => ({
            display: eval(state.display.slice(0, consecutiveOperatorInput.index + 1))
          }));
        } else {
          const result = eval(this.state.display).toString();

          this.setState({
            display: result
          })
        }
      /* Handle add, subtract, multiply, divide input */
      } else {
        const consecutiveOperatorInput = this.state.display.match(/\d[-\+\*\\]+$/);
        if(consecutiveOperatorInput) {
          if (buttonPressed === "-") {
            if (consecutiveOperatorInput.input.length === 3) return;
            this.setState((state) => ({
              display: state.display + buttonPressed
            })); 
          } else {
            this.setState((state) => ({
              display: state.display.slice(0, consecutiveOperatorInput.index + 1) + buttonPressed
            }))
          }
        } else {
          this.setState((state) => ({
            display: state.display + buttonPressed
          })); 
        }
      }
    /* Handle all number inputs */
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

