import React,{Component} from 'react';
import INTRO from './intro/Intro';
import Main from './Main';
export var isloading = true;
class App extends Component {
    constructor(props){
        super(props);
        this.state = ({isloading: true});
    }
    componentDidMount(){
        setTimeout(()=>this.setState({isloading: false}),1000);
    }
    render(){
        return(this.state.isloading?<INTRO />:<Main />)
    }
}
export default App;