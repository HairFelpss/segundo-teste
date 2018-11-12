import React, { Component } from 'react';
import Validation from './ValidationComponent/Validation'
import Char from './CharComponent/CharComponent'

import './App.css';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({ userInput: event.target.value })
    const arr = this.state.userInput.length + 1;

    console.log(arr)
    this.setState({ length: arr })

  }

  deleteInputHandler = (index) => {
    const text = this.state.userInput.split('')
    text.splice(index, 1)
    const updatedText = text.join('')
    this.setState({userInput: updatedText})
  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
      clicked={() => this.deleteInputHandler(index)}
      character={ch} 
      key={index} />
    })
    return (
      <div className="App">
        <input type="text"
          onChange={(event) => this.inputChangedHandler(event)}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation length={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
