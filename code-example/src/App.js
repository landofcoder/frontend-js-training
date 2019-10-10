import React from 'react';
import './App.css';
import Header from "./Header";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'JAY',
      student: [
        {}
      ]
    }
  }

  onChangeValue = (e) => {
    this.setState({inputValue: e.target.value})
  }

  render() {
    const { inputValue } = this.state;
    return (
        <>
          <div>
            <Header/>
            <input value={inputValue} onChange={this.onChangeValue}/>

            <h4>{inputValue}</h4>

            <h1>{inputValue}</h1>
          </div>
        </>
    );
  }
}

export default App;
