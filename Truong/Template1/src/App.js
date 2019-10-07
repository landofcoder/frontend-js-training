import React,{Component} from 'react';
import Header from './Component/Header/Header';
import Body from './Component/Body/Body';
import Footer from './Component/Footer/Footer';
class App extends Component{
  constructor(props){
    super(props);
    this.state = ({test: 1});
    console.log("in constructor : "+ this.state.test);
  }
  componentDidMount(){
    this.setState({test: 2});
    console.log("Change setstate test = 2 :" + this.state.test);
  }
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
