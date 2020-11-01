'use strict';

function Display(props) {
  return (
    <div>
      <h3>Display: {props.display}</h3>
    </div>
  );
}

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Buttons will go here.</h3>
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
  }

  render() {
    return (
      <div className="calculator">
        <Display display={this.state.display} />
        <Buttons />
      </div>
    )
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);

