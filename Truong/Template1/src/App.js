import React,{Component} from 'react';
import Header from './Component/Header/Header';
import Body from './Component/Body/Body';
import Footer from './Component/Footer/Footer';
class App extends Component{
  render() {
    return (
      <div>
        <Header  />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
