import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    inputLength: 0,
    inputString: ""
  };

  keyCounter = 0;
  keyArr = [];

  inputChangedHandler = event => {
    this.setState({
      inputLength: event.target.value.length,
      inputString: event.target.value
    });
  };

  charComponentClickHandler = index => {
    const iChars = this.state.inputString.split("");
    iChars.splice(index, 1);
    const newString = iChars.join("");

    this.setState({
      inputLength: newString.length,
      inputString: newString
    });
  };

  render() {
    const charComponentArr = this.state.inputString.split("");
    const charComponents = charComponentArr.map((c, index) => {
      return (
        <CharComponent
          inputChar={c}
          click={this.charComponentClickHandler.bind(this, index)}
        />
      );
    });
    return (
      <div className="App">
        <ol>
          <li>
            Create an input field (in App component) with a change listener
            which outputs the length of the entered text below it (e.g. in a
            paragraph).
          </li>
          <li>
            Create a new component (=> ValidationComponent) which receives the
            text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or
            "Text long enough" depending on the text length (e.g. take 5 as a
            minimum length)
          </li>
          <li>
            Create another component (=> CharComponent) and style it as an
            inline box (=> display: inline-block, padding: 16px, text-align:
            center, margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop.
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input
          onChange={this.inputChangedHandler}
          value={this.state.inputString}
        />
        <p className="input-paragraph">{this.state.inputLength}</p>
        <ValidationComponent inputLength={this.state.inputLength} />
        {charComponents}
      </div>
    );
  }
}

export default App;
