'use strict';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      history: "",
      decimalUsed: false,
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    e.preventDefault();
    let value = e.target.innerHTML;
    if (value === "x") value = "*";
    let lastCharacter = this.state.history.slice(-1);
    let operations = ["+", "-", "*", "/"];

    if (Number.isInteger(Number(value))) {
        if ((this.state.history === "") && value === "0") {
          return;
        } else if (this.state.history === "") {
          this.setState({
            display: value,
            history: value
          })
        } else if (operations.includes(lastCharacter)) {
          this.setState((state) => ({
            display: value,
            history: state.history + value,
          }));
        } else {
          this.setState((state) => ({
            display: state.display + value,
            history: state.history + value,
          }));
        }
    } else if (value === "AC") {
      this.setState({
        display: "0",
        history: "",
        decimalUsed: false
      })
    } else if (value === "=") {
      this.setState((state) => ({
        display: eval(state.history),
        history: ""
      }));
    } else if (operations.includes(value)) {
      if (value !== "-" && operations.includes(lastCharacter)) {
        this.setState((state) => ({
          history: state.history.slice(0, state.history.length - 1) + value,
          display: "",
          decimalUsed: false,
        }));
      } else {
        this.setState((state) => ({
          history: state.history + value,
          display: "",
          decimalUsed: false,
        }));
      }

    } else if (value === ".") {
      if (this.state.decimalUsed) return;
      else {
        this.setState((state) => ({
          display: state.display + value,
          history: state.history + value,
          decimalUsed: true
        }));
      }
    }
  }


  render() {
    return (
      <div className="calculator">
        <div id="display">
          {this.state.display}
        </div>

        <div onClick={this.handleButtonClick} className="buttons">
            <button id="clear">AC</button>
            <button id="divide">/</button>
            <button id="multiply">x</button>
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
      </div>
    )
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);