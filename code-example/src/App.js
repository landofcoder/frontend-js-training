import React from 'react';
import './App.css';
import Sum from './components/sum/Sum';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <>
          <Sum/>
        </>
    );
  }
}

export default App;
