import React from 'react';
export default class List extends React.Component {
    constructor(props){
      super(props);
      console.log(this.props);
      console.log("Run List");
      this.willdel = this.willdel.bind(this);
    }
    willdel = (event) => {
      console.log("run willdel");
      this.props.remove(this.props.detail);
    }
    render(){
      return(
        <li className="liclass list-group-item list-group-item-action">{this.props.detail}.  {this.props.value}
          <button onClick={this.willdel} type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </li>
      )
    }
}