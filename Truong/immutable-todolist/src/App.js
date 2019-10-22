import React,{Component} from 'react';
import INTRO from './components/Intro/Intro';
import {connect} from 'react-redux';
import {changeloading} from './actions/main-action';
import Main from './components/Main';
const mapStateToProps = (state) => ({
  isloading : state.getIn(['mainReducer','isloading'])
})
const mapDispatchToProps = (dispatch) => ({
  changeloading: () => (dispatch(changeloading()))
})
class App extends Component {
    componentDidMount(){
        setTimeout(()=>{this.props.changeloading()},1000);
        console.log("status is loading state" +this.props.isloading);
        console.log(this.props.isloading);
    }

    render(){
      console.log("re-render");
      console.log(this.props.isloading);
      return(
          this.props.isloading?<INTRO />:<Main />
      )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);