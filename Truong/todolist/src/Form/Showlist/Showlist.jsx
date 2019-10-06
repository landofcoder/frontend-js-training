import React from 'react';
import {detais} from '../Form';
import List from './List/List';
export default class Showlist extends React.Component {
    constructor(props){
      super(props);
      console.log("Run Showlist");
    }
    render() {
      console.log("show list");
      var showlistcache = detais.map(i =>{
        return (
          <List remove={this.props.remove} detail={i.detail} value={i.value}>
          </List>
        );
      });
      return showlistcache;
    }
  }