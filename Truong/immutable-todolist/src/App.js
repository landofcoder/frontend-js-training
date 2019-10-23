import React, { Component } from 'react';
import INTRO from './components/Intro/Intro';
import { connect } from 'react-redux';
import { changeLoading } from './actions/main-action';
import Main from './components/Main';
const mapStateToProps = (state) => ({
  isLoading: state.getIn(['mainReducer', 'isLoading'])
})
const mapDispatchToProps = (dispatch) => ({
  changeLoading: () => (dispatch(changeLoading()))
})
class App extends Component {
  componentDidMount() {
    setTimeout(() => { this.props.changeLoading() }, 1000);
    console.log("status is loading state" + this.props.isLoading);
    console.log(this.props.isLoading);
  }

  render() {
    console.log("re-render");
    console.log(this.props.isLoading);
    if (this.props.isLoading)
      return <INTRO />
    else
      return <Main />
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);