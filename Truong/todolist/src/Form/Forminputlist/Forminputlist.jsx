import React from 'react';
import {detais} from '../Form';
var cache;
export default class Forminputlist extends React.Component {
  constructor(props) {
    super(props);
    console.log("Run Forminput list");
    this.state = {cacheadd: ""};
    this.setvalue = this.setvalue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.removecacheadd = this.removecacheadd.bind(this);
  };
  removecacheadd = (event) => {
    this.setState({cacheadd:""});
  }
  setvalue = (event) =>{
    cache = new Object();
    cache.value = event.target.value;
    cache.detail = detais.length + 1;
  }
  onSubmit(event){
    event.preventDefault();
    if(cache.value){
      console.log("Add okie");
      this.setState({cacheadd: "Added !"});
      this.props.addItem({cache});
      setTimeout(this.removecacheadd,1000);
    }
    else{
      console.log("NULL");
    }
    this.refs.form.reset();
  }
  render() {
      return (
        <form ref="form" onSubmit={this.onSubmit} className="bgform">
            <div class="input-group input-group-lg setwidth">
              <input placeholder="Enter value" onKeyDown={this.setvalue} check="checktome" type="text"  className="input form-control" aria-label="" aria-describedby="inputGroup-sizing-sm"/>
            </div>
            <div>
              <p>{this.state.cacheadd}</p>
            </div>
        </form>
      )
  }
};