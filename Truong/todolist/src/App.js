import React,{Component} from 'react';
import INTRO from './intro/Intro';
import {Provider} from 'react-redux';
import Main from './Main';
import Storelist from './store/Storelist';
class App extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        setTimeout(()=>{this.props.offloading()},1000);
        console.log("status is loading state" +this.props.statusloading);
    }

    render(){
        return(
            this.props.statusloading?<INTRO />:<Provider store={Storelist} ><Main /></Provider>
        )
    }
}
export default App;